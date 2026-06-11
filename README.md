<!-- default badges list -->
![](https://img.shields.io/endpoint?url=https://codecentral.devexpress.com/api/v1/VersionRange/128583286/26.1.3%2B)
[![](https://img.shields.io/badge/Open_in_DevExpress_Support_Center-FF7200?style=flat-square&logo=DevExpress&logoColor=white)](https://supportcenter.devexpress.com/ticket/details/T358945)
[![](https://img.shields.io/badge/📖_How_to_use_DevExpress_Examples-e9f6fc?style=flat-square)](https://docs.devexpress.com/GeneralInformation/403183)
[![](https://img.shields.io/badge/💬_Leave_Feedback-feecdd?style=flat-square)](#does-this-example-address-your-development-requirementsobjectives)
<!-- default badges end -->
# DataGrid for DevExtreme - How to show command buttons only when a row is hovered/selected

This example demonstrates how to show command buttons only when a row is hovered/selected.

The DataGrid is configured with the [hoverStateEnabled](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/#hoverStateEnabled) property and single-mode [selection](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/Configuration/selection/). The following CSS hides command-column links and reveals them only for hovered or selected rows:

```css
.dx-command-edit .dx-link {
  visibility: hidden;
}

.dx-state-hover .dx-command-edit .dx-link,
.dx-selection .dx-command-edit .dx-link {
  visibility: visible;
}
```

![DevExtreme DataGrid - How to show command buttons only when a row is hovered/selected](images/datagrid-display-command-buttons.png)

## Files to Review

- **jQuery**
    - [index.js](jQuery/src/index.js)
    - [index.css](jQuery/src/index.css)
- **Angular**
    - [app.component.html](Angular/src/app/app.component.html)
    - [app.component.scss](Angular/src/app/app.component.scss)
- **Vue**
    - [HomeContent.vue](Vue/src/components/HomeContent.vue)
- **React**
    - [App.tsx](React/src/App.tsx)
    - [App.css](React/src/App.css)
- **ASP.NET Core**
    - [Index.cshtml](ASP.NET%20Core/Views/Home/Index.cshtml)

## Documentation

- [DataGrid - API Reference](https://js.devexpress.com/Documentation/ApiReference/UI_Components/dxDataGrid/)
<!-- feedback -->
## Does This Example Address Your Development Requirements/Objectives?

[<img src="https://www.devexpress.com/support/examples/i/yes-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-datagrid-show-command-buttons-only-when-row-is-hovered-or-selected&~~~was_helpful=yes) [<img src="https://www.devexpress.com/support/examples/i/no-button.svg"/>](https://www.devexpress.com/support/examples/survey.xml?utm_source=github&utm_campaign=devextreme-datagrid-show-command-buttons-only-when-row-is-hovered-or-selected&~~~was_helpful=no)

(you will be redirected to DevExpress.com to submit your response)
<!-- feedback end -->
