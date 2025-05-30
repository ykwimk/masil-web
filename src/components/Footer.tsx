import { Instagram, Youtube } from 'lucide-react';
import { Logo } from './shared/Logo';

export default function Footer() {
  return (
    <footer className="border-t bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-6 md:mb-0">
            <Logo />
            <p className="text-muted-foreground mt-2 max-w-md text-sm break-keep">
              마케터들의 가벼운 마실길, 함께 배우고 성장하는 커뮤니티입니다.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="mb-4 flex space-x-4">
              <a
                href="https://instagram.com/masil_community"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/@masil_community"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Youtube"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} 마실 커뮤니티. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
