import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'
export const alt = 'CodePath: Site institucional em promoção'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#0d0d0d',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '6px',
            backgroundColor: '#F0C740',
            display: 'flex',
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '64px 80px',
            height: '100%',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div
              style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#F0C740',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '26px',
                fontWeight: 700,
                color: '#111',
                fontFamily: 'serif',
              }}
            >
              C
            </div>
            <span
              style={{
                fontSize: '24px',
                fontWeight: 700,
                color: '#F5F1E6',
                letterSpacing: '-0.01em',
              }}
            >
              CodePath
            </span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div
              style={{
                fontSize: '54px',
                fontWeight: 700,
                color: '#F5F1E6',
                lineHeight: 1.1,
                maxWidth: '900px',
              }}
            >
              Seu site institucional no ar e no Google.
            </div>
            <div
              style={{
                fontSize: '20px',
                color: '#aaaaaa',
                lineHeight: 1.5,
                maxWidth: '640px',
                fontWeight: 400,
              }}
            >
              R$ 499 à vista ou 12x mensais de R$ 129,90. Oferta por tempo limitado.
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '20px',
                fontSize: '13px',
                color: '#E3C15A',
                letterSpacing: '0.08em',
              }}
            >
              <span>OFERTA POR TEMPO LIMITADO</span>
            </div>
            <span style={{ fontSize: '14px', color: '#777777' }}>
              codepath.dev.br
            </span>
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
