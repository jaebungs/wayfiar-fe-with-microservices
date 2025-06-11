import React, { useEffect } from 'react';

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  side?: 'left' | 'right';
  className?: string;
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  side = 'left',
  className = '',
}) => {
  const slideOutDirection = side === 'left' ? '-translate-x-full' : 'translate-x-full';

  function handleEscape(e: KeyboardEvent) {
    if (e.key === 'Escape' && isOpen) {
      onClose();
    }
  }
  useEffect(() => {
    document.addEventListener('keydown', handleEscape);

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className={`fixed inset-0 z-50 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-250 ${
          isOpen ? 'opacity-50' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      <div
        className={`
            absolute top-0 h-full transform transition-transform duration-250
            ${side === 'left' ? 'left-0' : 'right-0'}
            ${isOpen ? 'translate-x-0' : slideOutDirection}
            w-full md:w-80 lg:w-96
          `}
      >
        <div className={`h-full bg-white shadow-2xl ${className}`}>
          <div
            className={`
                h-full transform transition-transform duration-250
                ${isOpen ? 'translate-x-0' : slideOutDirection}
              `}
          >
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;
