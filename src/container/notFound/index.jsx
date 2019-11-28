import React, { Component } from "react";
import { SortableContainer, SortableElement } from "react-sortable-hoc";
import arrayMove from "array-move";
import { withRouter } from "react-router-dom";

const SortableItem = SortableElement(({ value }) => (
  <div
    style={{
      width: "100%",
      height: "200px",
      color: "#fff",
      backgroundColor: "red",
      marginBottom: "20px"
    }}
  >
    <img src={value} alt="" style={{ width: "100%", height: "100%" }} />
  </div>
));

const SortableList = SortableContainer(({ items }) => {
  return (
    <div>
      {items.map((value, index) => (
        <SortableItem key={`item-${value}`} index={index} value={value} />
      ))}
    </div>
  );
});

class SortableComponent extends Component {
  state = {
    items: [
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574844591959&di=f30d18b4f7147f927de89e82228506f4&imgtype=0&src=http%3A%2F%2Fpic11.nipic.com%2F20101117%2F3320946_134752173000_2.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574844616003&di=7c49bacbf2c1f75d9849a33959743dae&imgtype=jpg&src=http%3A%2F%2Fimg4.imgtn.bdimg.com%2Fit%2Fu%3D1735688044%2C4235283864%26fm%3D214%26gp%3D0.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574844591959&di=fcdca81b62d377aba2c367eb2b6de592&imgtype=0&src=http%3A%2F%2Fpic44.nipic.com%2F20140723%2F18505720_094503373000_2.jpg",
      "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1574844591959&di=15fc4e0737b1c6845048994a74e8ab5a&imgtype=0&src=http%3A%2F%2Fpic26.nipic.com%2F20121217%2F9252150_101201834000_2.jpg"
    ]
  };
  onSortEnd = ({ oldIndex, newIndex }) => {
    console.log(oldIndex, newIndex);
    this.setState(({ items }) => ({
      items: arrayMove(items, oldIndex, newIndex)
    }));
  };
  render() {
    return <SortableList items={this.state.items} onSortEnd={this.onSortEnd} />;
  }
}

export default withRouter(SortableComponent);
