import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { tomorrow } from "react-syntax-highlighter/dist/cjs/styles/prism";

export const CodeExample: React.FC = () => {
  const code = `
  class Reclamo extends BaseModel {
  static get tableName() {
    return "reclamos";
  }

  static get idColumn() {
    return "reclamo_id";
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: [
        "reclamo_titulo",
        "reclamo_detalle",
        "reclamo_estado",
        "company_id",
        "especialidad_id",
        "cliente_id",
      ],
      properties: {
        reclamo_id: { type: "integer" },
        reclamo_titulo: { type: "string", minLength: 1 },
        reclamo_detalle: { type: "string", minLength: 1 },
        reclamo_url: { type: ["string", "null"], minLength: 1 },
        reclamo_estado: {
          type: "string",
          enum: [
            "ABIERTO",
            "EN PROCESO",
            "EN PAUSA",
            "CERRADO",
            "CANCELADO",
            "RE-ABIERTO",
          ],
          default: "ABIERTO",
  
  `;

  return (
    <div className="rounded-xl shadow-lg overflow-auto font-mono text-sm bg-gray-900">
      <SyntaxHighlighter language="ts" style={tomorrow}>
        {code}
      </SyntaxHighlighter>
    </div>
  );
};
