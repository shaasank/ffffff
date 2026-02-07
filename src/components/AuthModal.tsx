import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';
import { Github, Mail } from 'lucide-react';

interface AuthModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
    const [isLoading, setIsLoading] = useState(false);

    const handleGoogleLogin = async () => {
        try {
            setIsLoading(true);
            const { error } = await supabase.auth.signInWithOAuth({
                provider: 'google',
                options: {
                    redirectTo: window.location.origin,
                }
            });
            if (error) throw error;
        } catch (error) {
            console.error('Error logging in with Google:', error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-md glass-card border-white/20">
                <DialogHeader>
                    <DialogTitle className="text-2xl font-display font-bold text-center">
                        Welcome to Stonkzz
                    </DialogTitle>
                    <DialogDescription className="text-center text-muted-foreground">
                        Sign in to access AI-powered market analysis
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    <Button
                        variant="outline"
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                        className="w-full h-12 text-lg font-medium hover:bg-white/10 border-white/20 transition-all hover:scale-[1.02]"
                    >
                        {isLoading ? 'Connecting...' : 'Continue with Google'}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
}
