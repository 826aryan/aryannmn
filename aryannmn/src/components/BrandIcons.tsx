import mcpLogo from '../../assets/brands/mcp.svg'

export function McpLogo({ className = '' }: { className?: string }) {
  return (
    <img
      src={mcpLogo}
      alt="Model Context Protocol logo"
      className={`inline-block shrink-0 rounded-sm ${className}`}
    />
  )
}
