'use client'
import { useState, useEffect, useRef, useCallback } from 'react';
import { createPortal } from 'react-dom';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { XLg } from 'react-bootstrap-icons';

const STEPS = [
  { num: '01', title: 'step1Title', desc: 'step1Desc', time: 'step1Time', active: true },
  { num: '02', title: 'step2Title', desc: 'step2Desc', time: 'step2Time', active: false },
  { num: '03', title: 'step3Title', desc: 'step3Desc', time: 'step3Time', active: false },
  { num: '04', title: 'step4Title', desc: 'step4Desc', time: 'step4Time', active: false },
  { num: '05', title: 'step5Title', desc: 'step5Desc', time: 'step5Time', active: false },
];

export default function WorkProcessModal({ onClose }) {
  const t = useTranslations('workProcessModal');
  const [show, setShow] = useState(false);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  // Body scroll lock + enter animation + focus management
  useEffect(() => {
    previousFocusRef.current = document.activeElement;
    document.body.style.overflow = 'hidden';

    const raf = requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        setShow(true);
        closeButtonRef.current?.focus();
      })
    );

    return () => {
      cancelAnimationFrame(raf);
      document.body.style.overflow = '';
    };
  }, []);

  const handleClose = useCallback(() => {
    setShow(false);
    setTimeout(() => {
      onClose();
      previousFocusRef.current?.focus();
    }, 150);
  }, [onClose]);

  // Escape key + focus trap
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        handleClose();
        return;
      }
      if (e.key === 'Tab' && modalRef.current) {
        const focusable = Array.from(
          modalRef.current.querySelectorAll(
            'button, a[href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.disabled);
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleClose]);

  const modalTransition = prefersReducedMotion
    ? 'opacity 150ms ease-out'
    : 'transform 250ms cubic-bezier(0.16, 1, 0.3, 1), opacity 250ms ease-out';

  return createPortal(
    <div
      onClick={(e) => e.target === e.currentTarget && handleClose()}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        opacity: show ? 1 : 0,
        transition: 'opacity 200ms ease-out',
      }}
    >
      <div
        ref={modalRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="work-process-title"
        style={{
          position: 'relative',
          width: '95vw',
          maxWidth: '640px',
          maxHeight: '90vh',
          backgroundColor: '#141414',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          opacity: show ? 1 : 0,
          transform: show ? 'scale(1)' : 'scale(0.95)',
          transition: modalTransition,
        }}
      >
        {/* Header */}
        <div style={{ padding: '24px 24px 0', flexShrink: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span
                style={{
                  fontSize: '11px',
                  textTransform: 'uppercase',
                  letterSpacing: '2px',
                  color: '#b4f541',
                  display: 'block',
                  marginBottom: '4px',
                }}
              >
                {t('label')}
              </span>
              <h2
                id="work-process-title"
                style={{ fontSize: '22px', fontWeight: 600, color: 'white', margin: 0 }}
              >
                {t('title')}
              </h2>
            </div>

            <button
              ref={closeButtonRef}
              onClick={handleClose}
              aria-label="Close"
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                background: 'transparent',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'border-color 150ms',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)')}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)')}
            >
              <XLg size={14} />
            </button>
          </div>
        </div>

        {/* Steps — scrollable body */}
        <div style={{ overflowY: 'auto', flex: 1, padding: '0 24px' }}>
          {STEPS.map((step, index) => (
            <div
              key={step.num}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
                padding: '20px 0',
                borderBottom:
                  index < STEPS.length - 1 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none',
              }}
            >
              {/* Number badge — 44×44 desktop, 36×36 mobile via className */}
              <div
                className="sm:w-11 sm:h-11 w-9 h-9"
                style={{
                  borderRadius: '12px',
                  flexShrink: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '13px',
                  fontWeight: 700,
                  ...(step.active
                    ? {
                        background: 'linear-gradient(135deg, #b4f541, #8cc930)',
                        color: '#111',
                      }
                    : {
                        background: 'rgba(180, 245, 65, 0.12)',
                        border: '1px solid rgba(180, 245, 65, 0.2)',
                        color: '#b4f541',
                      }),
                }}
              >
                {step.num}
              </div>

              {/* Text block */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{ fontSize: '15px', fontWeight: 600, color: 'white', marginBottom: '4px' }}
                >
                  {t(step.title)}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: 'rgba(255, 255, 255, 0.5)',
                    lineHeight: 1.5,
                  }}
                >
                  {t(step.desc)}
                </div>
                {/* Timeline label — mobile only (below description) */}
                <div
                  className="sm:hidden"
                  style={{
                    fontSize: '11px',
                    color: 'rgba(255, 255, 255, 0.25)',
                    marginTop: '6px',
                  }}
                >
                  {t(step.time)}
                </div>
              </div>

              {/* Timeline label — desktop only (right-aligned column) */}
              <div
                className="hidden sm:block"
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.25)',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  paddingTop: '2px',
                }}
              >
                {t(step.time)}
              </div>
            </div>
          ))}
        </div>

        {/* Footer CTAs */}
        <div
          className="flex sm:flex-row flex-col gap-3"
          style={{
            padding: '16px 24px 24px',
            flexShrink: 0,
            borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          }}
        >
          <Link
            href="#contact"
            onClick={handleClose}
            style={{
              flex: 1,
              padding: '13px',
              borderRadius: '10px',
              background: '#b4f541',
              color: '#111',
              fontWeight: 600,
              fontSize: '14px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            {t('primaryCta')}
          </Link>
          <Link
            href="#portfolio"
            onClick={handleClose}
            style={{
              flex: 1,
              padding: '13px',
              borderRadius: '10px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              color: 'rgba(255, 255, 255, 0.7)',
              fontSize: '14px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'block',
            }}
          >
            {t('secondaryCta')}
          </Link>
        </div>
      </div>
    </div>,
    document.body
  );
}
