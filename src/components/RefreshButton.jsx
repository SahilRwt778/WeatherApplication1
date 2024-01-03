import React from 'react';
class RefreshButton extends React.Component {
  handleRefresh = () => {
    window.location.reload();
  };

  render() {
    return (
      <button className='refbtn' onClick={this.handleRefresh}>
        Search for Another
      </button>
    );
  }
}

export default RefreshButton;