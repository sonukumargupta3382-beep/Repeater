import { useState, useCallback, useEffect } from 'react';

export function useClipboard() {
  const [hasCopied, setHasCopied] = useState(false);

  useEffect(() => {
    let timeoutId: number;
    if (hasCopied) {
      timeoutId = window.setTimeout(() => setHasCopied(false), 2000);
    }
    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [hasCopied]);

  const copyToClipboard = useCallback(async (text: string) => {
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setHasCopied(true);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  }, []);

  const pasteFromClipboard = useCallback(async (): Promise<string> => {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch (err) {
      console.error('Failed to read clipboard: ', err);
      return '';
    }
  }, []);

  return { copyToClipboard, pasteFromClipboard, hasCopied };
}
