import svgPlus from '../../resources/svg/plus.svg';
import svgHash from '../../resources/svg/hash.svg';
import svgDelete from '../../resources/svg/delete.svg';
import svgEdit from '../../resources/svg/edit.svg';

export function Main() {
  return (
    <main className="main">
      <div className="container main-container">
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
        <section className="section-tegs">
          <div className="teg card">
            <img className="hash" src={svgHash} alt="hash"></img>
            LinkedIn
            <button className="btn teg-btn delete-btn">
              <img src={svgDelete} alt=""></img>
              <span className="tooltiptext">delete tag</span>
            </button>
          </div>
        </section>

        <section className="section-notes">
          <div className="note card">
            <div className="note-btns-wrapper">
              <button className="btn edit-btn">
                <img src={svgEdit} alt=""></img>
                <span className="tooltiptext">edit note</span>
              </button>
              <button className="btn delete-btn">
                <img src={svgDelete} alt=""></img>
                <span className="tooltiptext">delete note</span>
              </button>
            </div>
            Заметьте, что нам пришлось изменить и высоту элементов: flex-basis может определять как
            высоту элементов, так и их ширину в зависимости от направления оси.
          </div>
        </section>
      </div>
    </main>
  );
}
