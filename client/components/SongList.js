import React from 'react';
import gql from 'graphql-tag';

class SongList extends React.Component {
  render() {
    return <div>SongList</div>;
  }
}

const query = gql`
  {
    songs {
      title
    }
  }
`;

export default SongList;
