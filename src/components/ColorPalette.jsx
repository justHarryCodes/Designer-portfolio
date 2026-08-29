/**
 * Renders a stack of brand color swatches.
 * `rows`: [{ rowClass, name, textColor?, codes: [{ label, value }] }]
 */
export default function ColorPalette({ rows }) {
  return (
    <div className="color-palette">
      {rows.map((row) => (
        <div key={row.name} className={`color-row ${row.rowClass}`}>
          <span className="color-name" style={row.textColor ? { color: row.textColor } : undefined}>
            {row.name}
          </span>
          <div className="color-codes">
            {row.codes.map((code) => (
              <div
                key={code.label}
                className="code-line"
                style={row.textColor ? { color: row.textColor } : undefined}
              >
                <span>{code.label}</span> {code.value}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
