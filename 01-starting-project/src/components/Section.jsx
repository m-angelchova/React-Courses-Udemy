//wrapper component
export default function Section({title, children, ...props}){ //...props collects id, classname etc.
    return (
        <section {...props}>
            <h2>{title}</h2>
            {children}
        </section>
    );
}