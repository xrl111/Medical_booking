import { Input } from 'antd';

function SearchBar() {
  return (
    <div className="search-bar">
      <Input.Search
        placeholder="Search for medical services, doctors, or clinics"
        enterButton="Search"
        size="large"
        onSearch={(value) => console.log(value)}
      />
    </div>
  );
}

export default SearchBar;
