import svgPlus from '../../../resources/svg/plus.svg';

function NoteAddSection() {
  return (
    <section className="section-creating">
      <textarea
        className="section-creating-textarea"
        autoComplete="off"
        placeholder="Enter note..."
      ></textarea>
      <button className="btn creating-btn">
        <img src={svgPlus} alt="add note"></img>
        <span className="tooltiptext">Create note</span>
      </button>
    </section>
  );
}

export default NoteAddSection;
