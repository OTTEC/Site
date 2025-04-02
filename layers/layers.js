var wms_layers = [];

var format_PETRduPaysdeBray_0 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_0 = format_PETRduPaysdeBray_0.readFeatures(json_PETRduPaysdeBray_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_0.addFeatures(features_PETRduPaysdeBray_0);
var lyr_PETRduPaysdeBray_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_0, 
                style: style_PETRduPaysdeBray_0,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: false,
                title: '<img src="styles/legend/PETRduPaysdeBray_0.png" /> PETR du Pays de Bray'
            });
var format_SMAdelaBresle_1 = new ol.format.GeoJSON();
var features_SMAdelaBresle_1 = format_SMAdelaBresle_1.readFeatures(json_SMAdelaBresle_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMAdelaBresle_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMAdelaBresle_1.addFeatures(features_SMAdelaBresle_1);
var lyr_SMAdelaBresle_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMAdelaBresle_1, 
                style: style_SMAdelaBresle_1,
                popuplayertitle: 'SMA de la Bresle',
                interactive: false,
                title: '<img src="styles/legend/SMAdelaBresle_1.png" /> SMA de la Bresle'
            });
var format_SMBVdelYres_2 = new ol.format.GeoJSON();
var features_SMBVdelYres_2 = format_SMBVdelYres_2.readFeatures(json_SMBVdelYres_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelYres_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelYres_2.addFeatures(features_SMBVdelYres_2);
var lyr_SMBVdelYres_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelYres_2, 
                style: style_SMBVdelYres_2,
                popuplayertitle: 'SMBV de l\'Yères',
                interactive: false,
                title: '<img src="styles/legend/SMBVdelYres_2.png" /> SMBV de l\'Yères'
            });
var format_SMBVdelArques_3 = new ol.format.GeoJSON();
var features_SMBVdelArques_3 = format_SMBVdelArques_3.readFeatures(json_SMBVdelArques_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SMBVdelArques_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SMBVdelArques_3.addFeatures(features_SMBVdelArques_3);
var lyr_SMBVdelArques_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SMBVdelArques_3, 
                style: style_SMBVdelArques_3,
                popuplayertitle: 'SMBV de l\'Arques',
                interactive: false,
                title: '<img src="styles/legend/SMBVdelArques_3.png" /> SMBV de l\'Arques'
            });
var format_VilledeGisors_4 = new ol.format.GeoJSON();
var features_VilledeGisors_4 = format_VilledeGisors_4.readFeatures(json_VilledeGisors_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VilledeGisors_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilledeGisors_4.addFeatures(features_VilledeGisors_4);
var lyr_VilledeGisors_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VilledeGisors_4, 
                style: style_VilledeGisors_4,
                popuplayertitle: 'Ville de Gisors',
                interactive: false,
                title: '<img src="styles/legend/VilledeGisors_4.png" /> Ville de Gisors'
            });
var format_SBVCaillyAubetteRobec_5 = new ol.format.GeoJSON();
var features_SBVCaillyAubetteRobec_5 = format_SBVCaillyAubetteRobec_5.readFeatures(json_SBVCaillyAubetteRobec_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SBVCaillyAubetteRobec_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SBVCaillyAubetteRobec_5.addFeatures(features_SBVCaillyAubetteRobec_5);
var lyr_SBVCaillyAubetteRobec_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SBVCaillyAubetteRobec_5, 
                style: style_SBVCaillyAubetteRobec_5,
                popuplayertitle: 'SBV Cailly-Aubette-Robec',
                interactive: false,
                title: '<img src="styles/legend/SBVCaillyAubetteRobec_5.png" /> SBV Cailly-Aubette-Robec'
            });
var format_Zoneshumides_6 = new ol.format.GeoJSON();
var features_Zoneshumides_6 = format_Zoneshumides_6.readFeatures(json_Zoneshumides_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneshumides_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneshumides_6.addFeatures(features_Zoneshumides_6);
var lyr_Zoneshumides_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneshumides_6, 
                style: style_Zoneshumides_6,
                popuplayertitle: 'Zones humides',
                interactive: true,
                title: '<img src="styles/legend/Zoneshumides_6.png" /> Zones humides'
            });
var format_SitesNatura2000_7 = new ol.format.GeoJSON();
var features_SitesNatura2000_7 = format_SitesNatura2000_7.readFeatures(json_SitesNatura2000_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesNatura2000_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesNatura2000_7.addFeatures(features_SitesNatura2000_7);
var lyr_SitesNatura2000_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesNatura2000_7, 
                style: style_SitesNatura2000_7,
                popuplayertitle: 'Sites Natura 2000',
                interactive: true,
                title: '<img src="styles/legend/SitesNatura2000_7.png" /> Sites Natura 2000'
            });
var format_Communes_8 = new ol.format.GeoJSON();
var features_Communes_8 = format_Communes_8.readFeatures(json_Communes_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_8.addFeatures(features_Communes_8);
var lyr_Communes_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_8, 
                style: style_Communes_8,
                popuplayertitle: 'Communes',
                interactive: true,
                title: '<img src="styles/legend/Communes_8.png" /> Communes'
            });
var format_PETRduPaysdeBray_9 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_9 = format_PETRduPaysdeBray_9.readFeatures(json_PETRduPaysdeBray_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_9.addFeatures(features_PETRduPaysdeBray_9);
var lyr_PETRduPaysdeBray_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_9, 
                style: style_PETRduPaysdeBray_9,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: false,
                title: '<img src="styles/legend/PETRduPaysdeBray_9.png" /> PETR du Pays de Bray'
            });
var format_Masque_10 = new ol.format.GeoJSON();
var features_Masque_10 = format_Masque_10.readFeatures(json_Masque_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masque_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masque_10.addFeatures(features_Masque_10);
var lyr_Masque_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masque_10, 
                style: style_Masque_10,
                popuplayertitle: 'Masque',
                interactive: false,
                title: '<img src="styles/legend/Masque_10.png" /> Masque'
            });
var format_Nomdescommunes_11 = new ol.format.GeoJSON();
var features_Nomdescommunes_11 = format_Nomdescommunes_11.readFeatures(json_Nomdescommunes_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nomdescommunes_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nomdescommunes_11.addFeatures(features_Nomdescommunes_11);
var lyr_Nomdescommunes_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nomdescommunes_11, 
                style: style_Nomdescommunes_11,
                popuplayertitle: 'Nom des communes',
                interactive: true,
                title: 'Nom des communes'
            });
var group_Habillage = new ol.layer.Group({
                                layers: [lyr_Masque_10,lyr_Nomdescommunes_11,],
                                fold: "open",
                                title: 'Habillage'});
var group_Limitesadministratives = new ol.layer.Group({
                                layers: [lyr_Communes_8,lyr_PETRduPaysdeBray_9,],
                                fold: "open",
                                title: 'Limites administratives'});
var group_Zonagesenvironnementaux = new ol.layer.Group({
                                layers: [lyr_Zoneshumides_6,lyr_SitesNatura2000_7,],
                                fold: "open",
                                title: 'Zonages environnementaux'});
var group_StructuresanimatricesMAEC = new ol.layer.Group({
                                layers: [lyr_PETRduPaysdeBray_0,lyr_SMAdelaBresle_1,lyr_SMBVdelYres_2,lyr_SMBVdelArques_3,lyr_VilledeGisors_4,lyr_SBVCaillyAubetteRobec_5,],
                                fold: "open",
                                title: 'Structures animatrices MAEC'});

lyr_PETRduPaysdeBray_0.setVisible(true);lyr_SMAdelaBresle_1.setVisible(true);lyr_SMBVdelYres_2.setVisible(true);lyr_SMBVdelArques_3.setVisible(true);lyr_VilledeGisors_4.setVisible(true);lyr_SBVCaillyAubetteRobec_5.setVisible(true);lyr_Zoneshumides_6.setVisible(true);lyr_SitesNatura2000_7.setVisible(true);lyr_Communes_8.setVisible(true);lyr_PETRduPaysdeBray_9.setVisible(true);lyr_Masque_10.setVisible(true);lyr_Nomdescommunes_11.setVisible(true);
var layersList = [group_StructuresanimatricesMAEC,group_Zonagesenvironnementaux,group_Limitesadministratives,group_Habillage];
lyr_PETRduPaysdeBray_0.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'SurfacePAE': 'SurfacePAE', });
lyr_SMAdelaBresle_1.set('fieldAliases', {'Libelle': 'Libelle', 'Idenr': 'Idenr', 'Surface': 'Surface', });
lyr_SMBVdelYres_2.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'Surface': 'Surface', });
lyr_SMBVdelArques_3.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'SurfacePAE': 'SurfacePAE', });
lyr_VilledeGisors_4.set('fieldAliases', {'LIBELLEOPE': 'LIBELLEOPE', 'LIBELLEPAE': 'LIBELLEPAE', 'Surface': 'Surface', 'Opérateur': 'Opérateur', });
lyr_SBVCaillyAubetteRobec_5.set('fieldAliases', {'LibelleOpe': 'LibelleOpe', 'LibellePAE': 'LibellePAE', 'Champident': 'Champident', 'Surface': 'Surface', 'Nom': 'Nom', });
lyr_Zoneshumides_6.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'URLMETAD': 'URLMETAD', });
lyr_SitesNatura2000_7.set('fieldAliases', {'NOM': 'NOM', });
lyr_Communes_8.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_PETRduPaysdeBray_9.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'layer': 'layer', 'path': 'path', });
lyr_Masque_10.set('fieldAliases', {'id': 'id', });
lyr_Nomdescommunes_11.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_PETRduPaysdeBray_0.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'SurfacePAE': 'TextEdit', });
lyr_SMAdelaBresle_1.set('fieldImages', {'Libelle': 'TextEdit', 'Idenr': 'TextEdit', 'Surface': 'TextEdit', });
lyr_SMBVdelYres_2.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'Surface': 'TextEdit', });
lyr_SMBVdelArques_3.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'SurfacePAE': 'TextEdit', });
lyr_VilledeGisors_4.set('fieldImages', {'LIBELLEOPE': 'TextEdit', 'LIBELLEPAE': 'TextEdit', 'Surface': 'TextEdit', 'Opérateur': 'TextEdit', });
lyr_SBVCaillyAubetteRobec_5.set('fieldImages', {'LibelleOpe': 'TextEdit', 'LibellePAE': 'TextEdit', 'Champident': 'TextEdit', 'Surface': 'TextEdit', 'Nom': 'TextEdit', });
lyr_Zoneshumides_6.set('fieldImages', {'LIBELLE': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_SitesNatura2000_7.set('fieldImages', {'NOM': 'TextEdit', });
lyr_Communes_8.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PETRduPaysdeBray_9.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Masque_10.set('fieldImages', {'id': 'TextEdit', });
lyr_Nomdescommunes_11.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_PETRduPaysdeBray_0.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'SurfacePAE': 'hidden field', });
lyr_SMAdelaBresle_1.set('fieldLabels', {'Libelle': 'hidden field', 'Idenr': 'hidden field', 'Surface': 'hidden field', });
lyr_SMBVdelYres_2.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'Surface': 'hidden field', });
lyr_SMBVdelArques_3.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'SurfacePAE': 'hidden field', });
lyr_VilledeGisors_4.set('fieldLabels', {'LIBELLEOPE': 'hidden field', 'LIBELLEPAE': 'hidden field', 'Surface': 'hidden field', 'Opérateur': 'hidden field', });
lyr_SBVCaillyAubetteRobec_5.set('fieldLabels', {'LibelleOpe': 'hidden field', 'LibellePAE': 'hidden field', 'Champident': 'hidden field', 'Surface': 'hidden field', 'Nom': 'hidden field', });
lyr_Zoneshumides_6.set('fieldLabels', {'LIBELLE': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_SitesNatura2000_7.set('fieldLabels', {'NOM': 'hidden field', });
lyr_Communes_8.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'header label - visible with data', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PETRduPaysdeBray_9.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Masque_10.set('fieldLabels', {'id': 'hidden field', });
lyr_Nomdescommunes_11.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Nomdescommunes_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});