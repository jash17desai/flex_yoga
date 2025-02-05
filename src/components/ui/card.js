export function Card({ children }) {
    return <div className="p-4 shadow-lg border rounded-lg">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-2">{children}</div>;
  }
  
  export function CardHeader({ children }) {
    return <h2 className="text-lg font-bold">{children}</h2>;
  }
  
  export function CardTitle({ children }) {
    return <h3 className="text-md font-semibold">{children}</h3>;
  }
  