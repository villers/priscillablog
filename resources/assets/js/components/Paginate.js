import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Grid, Menu } from 'semantic-ui-react';

const color = 'pink';

export default class Paginate extends React.PureComponent {
  static renderDots(key) {
    return <Menu.Item key={key} disabled>...</Menu.Item>;
  }

  constructor(props) {
    super(props);

    this.prevPageClicked = this.prevPageClicked.bind(this);
    this.nextPageClicked = this.nextPageClicked.bind(this);
    this.pageClicked = this.pageClicked.bind(this);
  }

  prevPageClicked(e) {
    const { currPage, onChange } = this.props;

    e.preventDefault();

    if (currPage > 1) {
      onChange(Number(currPage) - 1);
    }
  }

  nextPageClicked(e) {
    const { currPage, lastPage, onChange } = this.props;

    e.preventDefault();

    if (currPage < lastPage) {
      onChange(Number(currPage) + 1);
    }
  }

  pageClicked(pageNum, e) {
    const { currPage, onChange } = this.props;

    e.preventDefault();

    if (currPage !== pageNum) {
      onChange(Number(pageNum));
    }
  }

  renderPrevious() {
    const { currPage } = this.props;

    return (
      <Menu.Item
        key="prev"
        rel="prev"
        active={currPage <= 1}
        onClick={this.prevPageClicked}
      >
        «
      </Menu.Item>
    );
  }

  renderNext() {
    const { currPage, lastPage } = this.props;

    return (
      <Menu.Item
        key="next"
        rel="next"
        active={currPage >= lastPage}
        onClick={this.nextPageClicked}
      >
        »
      </Menu.Item>
    );
  }

  renderNumber(num) {
    const { currPage } = this.props;

    return (
      <Menu.Item
        key={num}
        active={currPage === num}
        onClick={_.partial(this.pageClicked, num)}
      >
        {num}
      </Menu.Item>
    );
  }

  renderRange(firstNum, lastNum) {
    const pages = [];

    for (let i = firstNum; i <= lastNum; i += 1) {
      pages.push(this.renderNumber(i));
    }

    return pages;
  }

  renderStart() {
    const pages = this.renderRange(1, 2);

    pages.push(Paginate.renderDots('dots-start'));

    return pages;
  }

  renderFinish() {
    const { lastPage } = this.props;
    const pages = this.renderRange(lastPage - 1, lastPage);

    pages.unshift(Paginate.renderDots('dots-finish'));

    return pages;
  }

  renderAdjacentRange() {
    const { currPage } = this.props;

    return this.renderRange(currPage - 2, currPage + 2);
  }

  renderSlider() {
    const { currPage, lastPage } = this.props;
    const sliderNum = 6;
    let buttons = [];

    if (currPage <= sliderNum) {
      buttons = buttons.concat(this.renderRange(1, sliderNum + 2));
      buttons = buttons.concat(this.renderFinish());
    } else if (currPage >= lastPage - sliderNum) {
      buttons = buttons.concat(this.renderStart());
      buttons = buttons.concat(this.renderRange(lastPage - sliderNum, lastPage));
    } else {
      buttons = buttons.concat(this.renderStart());
      buttons = buttons.concat(this.renderAdjacentRange());
      buttons = buttons.concat(this.renderFinish());
    }

    return buttons;
  }

  render() {
    const { currPage, lastPage } = this.props;

    let buttons = [];

    if (currPage !== 1) {
      buttons.push(this.renderPrevious());
    }

    if (lastPage <= 13) {
      buttons = buttons.concat(this.renderRange(1, lastPage));
    } else {
      buttons = buttons.concat(this.renderSlider());
    }

    if (currPage !== lastPage) {
      buttons.push(this.renderNext());
    }

    return (
      <Grid centered>
        <Grid.Row>
          <Grid.Column className="aligned">
            <Menu pagination color={color}>{buttons}</Menu>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

Paginate.propTypes = {
  currPage: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
