import biglCustomCreator from 'bigl-custom-creator';

import 'bigl-custom-creator/dist/index.min.css';

const node = document.getElementById('app');
const presetTemplates = [
    [
        { column: 1, row: 1 },
        { column: 2, row: 1 },
        { column: 3, row: 1 },
        { column: 4, row: 1 }
    ],
    [
        { column: [1, 2], row: 1 },
        { column: 3, row: 1 },
        { column: 4, row: 1 }
    ],
    [
        { column: 1, row: 1 },
        { column: [2, 3], row: 1 },
        { column: 4, row: 1 }
    ],
    [
        { column: 1, row: 1 },
        { column: 2, row: 1 },
        { column: [3, 4], row: 1 }
    ],
    [
        { column: [1, 2], row: 1 },
        { column: [3, 4], row: 1 }
    ],
    [
        { column: [1, 2, 3, 4], row: 1 }
    ]
];
const importJSON = null;
const onExportJSON = null;
const onUploadImage = null;

biglCustomCreator(node, {
    presetTemplates: presetTemplates,
    importJSON: importJSON,
    onExportJSON: onExportJSON,
    onUploadImage: onUploadImage
});
