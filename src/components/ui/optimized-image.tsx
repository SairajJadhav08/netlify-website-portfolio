import { useState } from "react";

interface OptimizedImageProps {
    src: string;
    alt: string;
    className?: string;
}

const OptimizedImage = ({ src, alt, className = "" }: OptimizedImageProps) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    return (
        <div className="relative w-full h-full">
            {/* Placeholder skeleton while loading */}
            {!isLoaded && !hasError && (
                <div className="absolute inset-0 bg-secondary animate-pulse" />
            )}

            {/* Error fallback */}
            {hasError && (
                <div className="absolute inset-0 bg-secondary flex items-center justify-center">
                    <span className="text-muted-foreground text-sm">Image unavailable</span>
                </div>
            )}

            <img
                src={src}
                alt={alt}
                loading="lazy"
                decoding="async"
                className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
                onLoad={() => setIsLoaded(true)}
                onError={() => setHasError(true)}
            />
        </div>
    );
};

export default OptimizedImage;
