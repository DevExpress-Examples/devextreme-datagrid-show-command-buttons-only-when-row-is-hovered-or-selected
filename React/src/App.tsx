import './App.css';
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import DataGrid, {
  Column,
  Editing,
  Paging,
  Selection,
} from 'devextreme-react/data-grid';
import { employees } from './data';

function App(): JSX.Element {
  return (
    <div className="main">
      <DataGrid
        dataSource={employees}
        keyExpr="ID"
        hoverStateEnabled={true}
      >
        <Paging enabled={false} />
        <Editing mode="form" allowUpdating={true} allowDeleting={true} />
        <Selection mode="single" />
        <Column dataField="Prefix" caption="Title" width={70} />
        <Column dataField="FirstName" />
        <Column dataField="LastName" />
        <Column dataField="Position" width={170} />
        <Column dataField="BirthDate" dataType="date" />
      </DataGrid>
    </div>
  );
}

export default App;
