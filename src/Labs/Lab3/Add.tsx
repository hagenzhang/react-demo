export default function Add({ a, b }: { a: number; b: number }) {
    return (
        <div id="wd-add">
            <h4>Add</h4>
            <p>
                a = {a} b = {b}
            </p>
            a + b = {a + b} <hr />
        </div>
    );
}
