var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_DensidadhabKm2_1 = new ol.format.GeoJSON();
var features_DensidadhabKm2_1 = format_DensidadhabKm2_1.readFeatures(json_DensidadhabKm2_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DensidadhabKm2_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DensidadhabKm2_1.addFeatures(features_DensidadhabKm2_1);
var lyr_DensidadhabKm2_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DensidadhabKm2_1, 
                style: style_DensidadhabKm2_1,
                popuplayertitle: "Densidad hab/Km2",
                interactive: true,
    title: 'Densidad hab/Km2<br />\
    <img src="styles/legend/DensidadhabKm2_1_0.png" /> 62 - 190<br />\
    <img src="styles/legend/DensidadhabKm2_1_1.png" /> 190 - 354<br />\
    <img src="styles/legend/DensidadhabKm2_1_2.png" /> 354 - 643<br />\
    <img src="styles/legend/DensidadhabKm2_1_3.png" /> 643 - 1215<br />\
    <img src="styles/legend/DensidadhabKm2_1_4.png" /> 1215 - 1932<br />\
    <img src="styles/legend/DensidadhabKm2_1_5.png" /> 1932 - 4607<br />\
    <img src="styles/legend/DensidadhabKm2_1_6.png" /> 4607 - 6454<br />'
        });
var format_Rutas_2 = new ol.format.GeoJSON();
var features_Rutas_2 = format_Rutas_2.readFeatures(json_Rutas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rutas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rutas_2.addFeatures(features_Rutas_2);
var lyr_Rutas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rutas_2, 
                style: style_Rutas_2,
                popuplayertitle: "Rutas",
                interactive: true,
    title: 'Rutas<br />\
    <img src="styles/legend/Rutas_2_0.png" /> Carretera<br />\
    <img src="styles/legend/Rutas_2_1.png" /> Primaria<br />\
    <img src="styles/legend/Rutas_2_2.png" /> Secundaria<br />'
        });
var format_Lagos_3 = new ol.format.GeoJSON();
var features_Lagos_3 = format_Lagos_3.readFeatures(json_Lagos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Lagos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Lagos_3.addFeatures(features_Lagos_3);
var lyr_Lagos_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Lagos_3, 
                style: style_Lagos_3,
                popuplayertitle: "Lagos",
                interactive: true,
                title: '<img src="styles/legend/Lagos_3.png" /> Lagos'
            });
var format_Ferrocarril_4 = new ol.format.GeoJSON();
var features_Ferrocarril_4 = format_Ferrocarril_4.readFeatures(json_Ferrocarril_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ferrocarril_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ferrocarril_4.addFeatures(features_Ferrocarril_4);
var lyr_Ferrocarril_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ferrocarril_4, 
                style: style_Ferrocarril_4,
                popuplayertitle: "Ferrocarril",
                interactive: true,
                title: '<img src="styles/legend/Ferrocarril_4.png" /> Ferrocarril'
            });
var format_Rios_5 = new ol.format.GeoJSON();
var features_Rios_5 = format_Rios_5.readFeatures(json_Rios_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rios_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rios_5.addFeatures(features_Rios_5);
var lyr_Rios_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rios_5, 
                style: style_Rios_5,
                popuplayertitle: "Rios",
                interactive: true,
                title: '<img src="styles/legend/Rios_5.png" /> Rios'
            });
var format_CiudadCapital_6 = new ol.format.GeoJSON();
var features_CiudadCapital_6 = format_CiudadCapital_6.readFeatures(json_CiudadCapital_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CiudadCapital_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CiudadCapital_6.addFeatures(features_CiudadCapital_6);
var lyr_CiudadCapital_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CiudadCapital_6, 
                style: style_CiudadCapital_6,
                popuplayertitle: "Ciudad Capital",
                interactive: true,
                title: '<img src="styles/legend/CiudadCapital_6.png" /> Ciudad Capital'
            });

lyr_ESRIGraylight_0.setVisible(true);lyr_DensidadhabKm2_1.setVisible(true);lyr_Rutas_2.setVisible(true);lyr_Lagos_3.setVisible(true);lyr_Ferrocarril_4.setVisible(true);lyr_Rios_5.setVisible(true);lyr_CiudadCapital_6.setVisible(true);
var layersList = [lyr_ESRIGraylight_0,lyr_DensidadhabKm2_1,lyr_Rutas_2,lyr_Lagos_3,lyr_Ferrocarril_4,lyr_Rios_5,lyr_CiudadCapital_6];
lyr_DensidadhabKm2_1.set('fieldAliases', {'Nombre': 'Nombre', '名前': '名前', 'Poblacion': 'Poblacion', 'Area': 'Area', 'Densidad': 'Densidad', });
lyr_Rutas_2.set('fieldAliases', {'Pavimento': 'Pavimento', 'Tipo': 'Tipo', });
lyr_Lagos_3.set('fieldAliases', {'nam': 'nam', 'Tipo': 'Tipo', });
lyr_Ferrocarril_4.set('fieldAliases', {'Localizaci': 'Localizaci', 'Tipo': 'Tipo', });
lyr_Rios_5.set('fieldAliases', {'nam': 'nam', 'Categoria': 'Categoria', });
lyr_CiudadCapital_6.set('fieldAliases', {'Nombre': 'Nombre', '名前': '名前', });
lyr_DensidadhabKm2_1.set('fieldImages', {'Nombre': 'TextEdit', '名前': 'TextEdit', 'Poblacion': '', 'Area': 'TextEdit', 'Densidad': 'TextEdit', });
lyr_Rutas_2.set('fieldImages', {'Pavimento': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Lagos_3.set('fieldImages', {'nam': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Ferrocarril_4.set('fieldImages', {'Localizaci': 'TextEdit', 'Tipo': 'TextEdit', });
lyr_Rios_5.set('fieldImages', {'nam': 'TextEdit', 'Categoria': 'TextEdit', });
lyr_CiudadCapital_6.set('fieldImages', {'Nombre': 'TextEdit', '名前': 'TextEdit', });
lyr_DensidadhabKm2_1.set('fieldLabels', {'Nombre': 'inline label - always visible', '名前': 'inline label - always visible', 'Poblacion': 'inline label - always visible', 'Area': 'hidden field', 'Densidad': 'inline label - always visible', });
lyr_Rutas_2.set('fieldLabels', {'Pavimento': 'inline label - always visible', 'Tipo': 'inline label - always visible', });
lyr_Lagos_3.set('fieldLabels', {'nam': 'hidden field', 'Tipo': 'inline label - always visible', });
lyr_Ferrocarril_4.set('fieldLabels', {'Localizaci': 'inline label - always visible', 'Tipo': 'inline label - always visible', });
lyr_Rios_5.set('fieldLabels', {'nam': 'hidden field', 'Categoria': 'inline label - always visible', });
lyr_CiudadCapital_6.set('fieldLabels', {'Nombre': 'inline label - always visible', '名前': 'inline label - always visible', });
lyr_CiudadCapital_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});