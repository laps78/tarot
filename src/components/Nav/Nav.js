import './Nav.css';

export default function Nav ({ setPage }) {
  const menuClickHandler = (evt) => {
    evt.preventDefault();
    setPage(Number(evt.target.dataset.pageId));
  }
  return (
    <ul className="mainMenu">
      <li className="mainMenuItem" data-pageId="0" onClick={menuClickHandler}>Карта дня</li>
      <li className="mainMenuItem" data-pageId="1" onClick={menuClickHandler}>Описания карт</li>
      <li className="mainMenuItem" data-pageId="2" onClick={menuClickHandler}>О приложении</li>
    </ul>
  );
}
