import { useEffect, useCallback } from "preact/hooks";

interface ImageLightboxProps {
  src: string;
  alt?: string;
  onClose: () => void;
}

export function ImageLightbox({ src, alt, onClose }: ImageLightboxProps) {
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  }, [onClose]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  return (
    <div className="lightbox__backdrop" onClick={onClose}>
      <div className="lightbox__container" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close preview"
        >✕</button>
        <img
          className="lightbox__image"
          src={src}
          alt={alt || "Preview"}
          loading="lazy"
        />
      </div>
    </div>
  );
}
