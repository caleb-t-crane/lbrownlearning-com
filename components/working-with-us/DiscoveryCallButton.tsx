'use client';

import { useState } from 'react';
import DiscoveryCallModal from './DiscoveryCallModal';

export default function DiscoveryCallButton({
  label,
  className,
}: {
  label: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {label}
      </button>
      <DiscoveryCallModal open={open} onClose={() => setOpen(false)} />
    </>
  );
}
