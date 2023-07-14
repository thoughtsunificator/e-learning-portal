import ReadingMaterial from "./ReadingMaterial";

const CourseMaterial = (props) => {
  return (
    <div className={props.className}>
      <ReadingMaterial
        title="NodeJS"
        href="https://flaviocopes.com/books-dist/sql-handbook.pdf"
      />
      <ReadingMaterial
        title="SQL Notes"
        href="https://flaviocopes.com/books-dist/express-handbook.pdf"
      />
      <ReadingMaterial
        title="ExpressJS"
        href="https://flaviocopes.com/books-dist/node-handbook.pdf"
      />
      <ReadingMaterial
        title="HTML"
        href="https://flaviocopes.com/books-dist/node-handbook.pdf"
      />
      <ReadingMaterial
        title="JAVA"
        href="https://flaviocopes.com/books-dist/node-handbook.pdf"
      />
      <ReadingMaterial
        title="Python"
        href="https://flaviocopes.com/books-dist/node-handbook.pdf"
      />
      <ReadingMaterial
        title="JavaScript"
        href="https://flaviocopes.com/books-dist/node-handbook.pdf"
      />
    </div>
  );
};

export default CourseMaterial;
