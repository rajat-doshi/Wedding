const Tabs = (props) => {
  let tab = [];
  for (let i = 1; i <= props.total_record/props.limit; i++) {
    tab.push(
      <a
        href="#"
        className={`${props.active == i && "active"}`}
        onClick={()=>{
          props.onClick(i)
        }}
      >
        {i}
      </a>
    );
  }
  return tab;
};
export default function Pagination(props) {
  return (
    <div class="center">
      <div class="pagination">
        <a href="#">&laquo;</a>
        <Tabs
          total_record={props.total_record}
          active={props.active}
          onClick={props.onClick}
          limit={props.limit}
        />
        <a href="#">&raquo;</a>
      </div>
    </div>
  );
}
