export default function () {
  return (
    <html>
      <head>
        <title>Hello</title>
        <link
          href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css"
          rel="stylesheet"
        />
      </head>
      <body>
        <h1 className="text-3xl m-2">Hello, world.</h1>
        <button className="border bg-indigo-600 text-white px-2 py-1 rounded m-2">
          No action button
        </button>
      </body>
    </html>
  );
}
