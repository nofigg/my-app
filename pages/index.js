export default function Home() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      background: '#ffffff'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        marginBottom: '1.5rem',
        fontWeight: 700,
        color: '#333'
      }}>
        Changes are coming
      </h1>
      <p style={{
        fontSize: '1.25rem',
        color: '#666',
        lineHeight: 1.6
      }}>
        Stay tuned...
      </p>
    </div>
  )
}
