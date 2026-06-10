<script setup lang="ts">
import 'devextreme/dist/css/dx.material.blue.light.compact.css';
import {
  DxColumn,
  DxDataGrid,
  DxEditing,
  DxPaging,
  DxSelection,
} from 'devextreme-vue/data-grid';
import { employees } from '../data';
</script>
<template>
  <div>
    <DxDataGrid
      :data-source="employees"
      key-expr="ID"
      :hover-state-enabled="true"
    >
      <DxPaging :enabled="false"/>
      <DxEditing
        mode="form"
        :allow-updating="true"
        :allow-deleting="true"
      />
      <DxSelection mode="single"/>
      <DxColumn
        data-field="Prefix"
        caption="Title"
        :width="70"
      />
      <DxColumn data-field="FirstName"/>
      <DxColumn data-field="LastName"/>
      <DxColumn
        data-field="Position"
        :width="170"
      />
      <DxColumn
        data-field="BirthDate"
        data-type="date"
      />
    </DxDataGrid>
  </div>
</template>
<style>
.dx-command-edit .dx-link {
  visibility: hidden;
}

.dx-state-hover .dx-command-edit .dx-link,
.dx-selection .dx-command-edit .dx-link {
  visibility: visible;
}
</style>
