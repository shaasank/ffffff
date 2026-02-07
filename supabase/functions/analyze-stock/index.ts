
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders });
    }

    try {
        const { stock, mf, budget, investmentType } = await req.json();
        const growApiKey = Deno.env.get('GROW_API_KEY');
        const claudeApiKey = Deno.env.get('CLAUDE_API_KEY');

        if (!growApiKey || !claudeApiKey) {
            throw new Error('Missing API Keys in Environment');
        }

        // 1. Fetch Stock Data from Grow API
        // Note: This is a simulated fetch based on the provided API structure documentation or assumption.
        // Replace with actual Grow API endpoint if different.
        const growResponse = await fetch(`https://api.groww.in/v1/api/stocks_data/v1/company/search_id/${stock || 'RELIANCE'}`, {
            headers: {
                'Authorization': `Bearer ${growApiKey}`
            }
        });

        // Fallback/Mock data if API fails (since we might not have valid specific endpoints/IDs)
        let stockData = { currentPrice: 1000, fundamentals: "Strong" };
        if (growResponse.ok) {
            stockData = await growResponse.json();
        }

        // 2. Analyze with Claude
        const prompt = `
      You are a financial advisor. Analyze the following investment scenario:
      Type: ${investmentType}
      Budget: ${budget}
      Stock/Asset: ${stock || mf}
      Market Data: ${JSON.stringify(stockData)}
      
      Provide a recommendation with:
      1. Reason for suggestion.
      2. Approximate calculated returns (%).
      3. Risk assessment.
    `;

        const claudeResponse = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
                'x-api-key': claudeApiKey,
                'anthropic-version': '2023-06-01',
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                model: 'claude-3-opus-20240229',
                max_tokens: 1024,
                messages: [{ role: 'user', content: prompt }],
            }),
        });

        const analysis = await claudeResponse.json();

        return new Response(JSON.stringify(analysis), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        });
    }
});
