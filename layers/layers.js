var wms_layers = [];


        var lyr_GoogleRoad_0 = new ol.layer.Tile({
            'title': 'Google Road',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Limit_Itaquaquecetuba_2 = new ol.format.GeoJSON();
var features_Limit_Itaquaquecetuba_2 = format_Limit_Itaquaquecetuba_2.readFeatures(json_Limit_Itaquaquecetuba_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Limit_Itaquaquecetuba_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Limit_Itaquaquecetuba_2.addFeatures(features_Limit_Itaquaquecetuba_2);
var lyr_Limit_Itaquaquecetuba_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Limit_Itaquaquecetuba_2, 
                style: style_Limit_Itaquaquecetuba_2,
                interactive: true,
                title: '<img src="styles/legend/Limit_Itaquaquecetuba_2.png" /> Limit_Itaquaquecetuba'
            });
var format_VilaVirginia_3 = new ol.format.GeoJSON();
var features_VilaVirginia_3 = format_VilaVirginia_3.readFeatures(json_VilaVirginia_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VilaVirginia_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VilaVirginia_3.addFeatures(features_VilaVirginia_3);
var lyr_VilaVirginia_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_VilaVirginia_3, 
                style: style_VilaVirginia_3,
                interactive: true,
                title: '<img src="styles/legend/VilaVirginia_3.png" /> Vila Virginia'
            });
var format_Una_4 = new ol.format.GeoJSON();
var features_Una_4 = format_Una_4.readFeatures(json_Una_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Una_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Una_4.addFeatures(features_Una_4);
var lyr_Una_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Una_4, 
                style: style_Una_4,
                interactive: true,
                title: '<img src="styles/legend/Una_4.png" /> Una'
            });
var format_Tipoia_5 = new ol.format.GeoJSON();
var features_Tipoia_5 = format_Tipoia_5.readFeatures(json_Tipoia_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tipoia_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tipoia_5.addFeatures(features_Tipoia_5);
var lyr_Tipoia_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Tipoia_5, 
                style: style_Tipoia_5,
                interactive: true,
                title: '<img src="styles/legend/Tipoia_5.png" /> Tipoia'
            });
var format_SitioMatoDentro_6 = new ol.format.GeoJSON();
var features_SitioMatoDentro_6 = format_SitioMatoDentro_6.readFeatures(json_SitioMatoDentro_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitioMatoDentro_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitioMatoDentro_6.addFeatures(features_SitioMatoDentro_6);
var lyr_SitioMatoDentro_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SitioMatoDentro_6, 
                style: style_SitioMatoDentro_6,
                interactive: true,
                title: '<img src="styles/legend/SitioMatoDentro_6.png" /> Sitio Mato Dentro'
            });
var format_SoBento_7 = new ol.format.GeoJSON();
var features_SoBento_7 = format_SoBento_7.readFeatures(json_SoBento_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SoBento_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SoBento_7.addFeatures(features_SoBento_7);
var lyr_SoBento_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SoBento_7, 
                style: style_SoBento_7,
                interactive: true,
                title: '<img src="styles/legend/SoBento_7.png" /> São Bento'
            });
var format_RioAbaixo_8 = new ol.format.GeoJSON();
var features_RioAbaixo_8 = format_RioAbaixo_8.readFeatures(json_RioAbaixo_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RioAbaixo_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RioAbaixo_8.addFeatures(features_RioAbaixo_8);
var lyr_RioAbaixo_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RioAbaixo_8, 
                style: style_RioAbaixo_8,
                interactive: true,
                title: '<img src="styles/legend/RioAbaixo_8.png" /> Rio Abaixo'
            });
var format_Pium_9 = new ol.format.GeoJSON();
var features_Pium_9 = format_Pium_9.readFeatures(json_Pium_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pium_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pium_9.addFeatures(features_Pium_9);
var lyr_Pium_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pium_9, 
                style: style_Pium_9,
                interactive: true,
                title: '<img src="styles/legend/Pium_9.png" /> Pium'
            });
var format_Pinheirinho_10 = new ol.format.GeoJSON();
var features_Pinheirinho_10 = format_Pinheirinho_10.readFeatures(json_Pinheirinho_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pinheirinho_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pinheirinho_10.addFeatures(features_Pinheirinho_10);
var lyr_Pinheirinho_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pinheirinho_10, 
                style: style_Pinheirinho_10,
                interactive: true,
                title: '<img src="styles/legend/Pinheirinho_10.png" /> Pinheirinho'
            });
var format_Perobal_11 = new ol.format.GeoJSON();
var features_Perobal_11 = format_Perobal_11.readFeatures(json_Perobal_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Perobal_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Perobal_11.addFeatures(features_Perobal_11);
var lyr_Perobal_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Perobal_11, 
                style: style_Perobal_11,
                interactive: true,
                title: '<img src="styles/legend/Perobal_11.png" /> Perobal'
            });
var format_Pedreira_12 = new ol.format.GeoJSON();
var features_Pedreira_12 = format_Pedreira_12.readFeatures(json_Pedreira_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pedreira_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pedreira_12.addFeatures(features_Pedreira_12);
var lyr_Pedreira_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pedreira_12, 
                style: style_Pedreira_12,
                interactive: true,
                title: '<img src="styles/legend/Pedreira_12.png" /> Pedreira'
            });
var format_NovaLouzada_13 = new ol.format.GeoJSON();
var features_NovaLouzada_13 = format_NovaLouzada_13.readFeatures(json_NovaLouzada_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NovaLouzada_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NovaLouzada_13.addFeatures(features_NovaLouzada_13);
var lyr_NovaLouzada_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_NovaLouzada_13, 
                style: style_NovaLouzada_13,
                interactive: true,
                title: '<img src="styles/legend/NovaLouzada_13.png" /> Nova Louzada'
            });
var format_MorroBranco_14 = new ol.format.GeoJSON();
var features_MorroBranco_14 = format_MorroBranco_14.readFeatures(json_MorroBranco_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MorroBranco_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MorroBranco_14.addFeatures(features_MorroBranco_14);
var lyr_MorroBranco_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MorroBranco_14, 
                style: style_MorroBranco_14,
                interactive: true,
                title: '<img src="styles/legend/MorroBranco_14.png" /> Morro Branco'
            });
var format_MonteBelo_15 = new ol.format.GeoJSON();
var features_MonteBelo_15 = format_MonteBelo_15.readFeatures(json_MonteBelo_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MonteBelo_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MonteBelo_15.addFeatures(features_MonteBelo_15);
var lyr_MonteBelo_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MonteBelo_15, 
                style: style_MonteBelo_15,
                interactive: true,
                title: '<img src="styles/legend/MonteBelo_15.png" /> Monte Belo'
            });
var format_Mandi_16 = new ol.format.GeoJSON();
var features_Mandi_16 = format_Mandi_16.readFeatures(json_Mandi_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mandi_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mandi_16.addFeatures(features_Mandi_16);
var lyr_Mandi_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Mandi_16, 
                style: style_Mandi_16,
                interactive: true,
                title: '<img src="styles/legend/Mandi_16.png" /> Mandi'
            });
var format_JulioSimoes_17 = new ol.format.GeoJSON();
var features_JulioSimoes_17 = format_JulioSimoes_17.readFeatures(json_JulioSimoes_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JulioSimoes_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JulioSimoes_17.addFeatures(features_JulioSimoes_17);
var lyr_JulioSimoes_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JulioSimoes_17, 
                style: style_JulioSimoes_17,
                interactive: true,
                title: '<img src="styles/legend/JulioSimoes_17.png" /> Julio Simoes'
            });
var format_Jardim_Rio_Negro_18 = new ol.format.GeoJSON();
var features_Jardim_Rio_Negro_18 = format_Jardim_Rio_Negro_18.readFeatures(json_Jardim_Rio_Negro_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jardim_Rio_Negro_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jardim_Rio_Negro_18.addFeatures(features_Jardim_Rio_Negro_18);
var lyr_Jardim_Rio_Negro_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jardim_Rio_Negro_18, 
                style: style_Jardim_Rio_Negro_18,
                interactive: true,
                title: '<img src="styles/legend/Jardim_Rio_Negro_18.png" /> Jardim_Rio_Negro'
            });
var format_JardimPinheirinho_19 = new ol.format.GeoJSON();
var features_JardimPinheirinho_19 = format_JardimPinheirinho_19.readFeatures(json_JardimPinheirinho_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimPinheirinho_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimPinheirinho_19.addFeatures(features_JardimPinheirinho_19);
var lyr_JardimPinheirinho_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JardimPinheirinho_19, 
                style: style_JardimPinheirinho_19,
                interactive: true,
                title: '<img src="styles/legend/JardimPinheirinho_19.png" /> Jardim Pinheirinho'
            });
var format_JardimNicea_20 = new ol.format.GeoJSON();
var features_JardimNicea_20 = format_JardimNicea_20.readFeatures(json_JardimNicea_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimNicea_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimNicea_20.addFeatures(features_JardimNicea_20);
var lyr_JardimNicea_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JardimNicea_20, 
                style: style_JardimNicea_20,
                interactive: true,
                title: '<img src="styles/legend/JardimNicea_20.png" /> Jardim Nicea'
            });
var format_JardimLucinda_21 = new ol.format.GeoJSON();
var features_JardimLucinda_21 = format_JardimLucinda_21.readFeatures(json_JardimLucinda_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimLucinda_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimLucinda_21.addFeatures(features_JardimLucinda_21);
var lyr_JardimLucinda_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JardimLucinda_21, 
                style: style_JardimLucinda_21,
                interactive: true,
                title: '<img src="styles/legend/JardimLucinda_21.png" /> Jardim Lucinda'
            });
var format_JardimJosely_22 = new ol.format.GeoJSON();
var features_JardimJosely_22 = format_JardimJosely_22.readFeatures(json_JardimJosely_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimJosely_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimJosely_22.addFeatures(features_JardimJosely_22);
var lyr_JardimJosely_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JardimJosely_22, 
                style: style_JardimJosely_22,
                interactive: true,
                title: '<img src="styles/legend/JardimJosely_22.png" /> Jardim Josely'
            });
var format_JardimAmazonas_23 = new ol.format.GeoJSON();
var features_JardimAmazonas_23 = format_JardimAmazonas_23.readFeatures(json_JardimAmazonas_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JardimAmazonas_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JardimAmazonas_23.addFeatures(features_JardimAmazonas_23);
var lyr_JardimAmazonas_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_JardimAmazonas_23, 
                style: style_JardimAmazonas_23,
                interactive: true,
                title: '<img src="styles/legend/JardimAmazonas_23.png" /> Jardim Amazonas'
            });
var format_Jaguari_24 = new ol.format.GeoJSON();
var features_Jaguari_24 = format_Jaguari_24.readFeatures(json_Jaguari_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaguari_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaguari_24.addFeatures(features_Jaguari_24);
var lyr_Jaguari_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Jaguari_24, 
                style: style_Jaguari_24,
                interactive: true,
                title: '<img src="styles/legend/Jaguari_24.png" /> Jaguari'
            });
var format_Estacao_25 = new ol.format.GeoJSON();
var features_Estacao_25 = format_Estacao_25.readFeatures(json_Estacao_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Estacao_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estacao_25.addFeatures(features_Estacao_25);
var lyr_Estacao_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Estacao_25, 
                style: style_Estacao_25,
                interactive: true,
                title: '<img src="styles/legend/Estacao_25.png" /> Estacao'
            });
var format_Cuiab_26 = new ol.format.GeoJSON();
var features_Cuiab_26 = format_Cuiab_26.readFeatures(json_Cuiab_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cuiab_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cuiab_26.addFeatures(features_Cuiab_26);
var lyr_Cuiab_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cuiab_26, 
                style: style_Cuiab_26,
                interactive: true,
                title: '<img src="styles/legend/Cuiab_26.png" /> Cuiabá'
            });
var format_Corredor_27 = new ol.format.GeoJSON();
var features_Corredor_27 = format_Corredor_27.readFeatures(json_Corredor_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Corredor_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Corredor_27.addFeatures(features_Corredor_27);
var lyr_Corredor_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Corredor_27, 
                style: style_Corredor_27,
                interactive: true,
                title: '<img src="styles/legend/Corredor_27.png" /> Corredor'
            });
var format_CidadeKernel_28 = new ol.format.GeoJSON();
var features_CidadeKernel_28 = format_CidadeKernel_28.readFeatures(json_CidadeKernel_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CidadeKernel_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CidadeKernel_28.addFeatures(features_CidadeKernel_28);
var lyr_CidadeKernel_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CidadeKernel_28, 
                style: style_CidadeKernel_28,
                interactive: true,
                title: '<img src="styles/legend/CidadeKernel_28.png" /> Cidade Kernel'
            });
var format_Centro_29 = new ol.format.GeoJSON();
var features_Centro_29 = format_Centro_29.readFeatures(json_Centro_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Centro_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Centro_29.addFeatures(features_Centro_29);
var lyr_Centro_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Centro_29, 
                style: style_Centro_29,
                interactive: true,
                title: '<img src="styles/legend/Centro_29.png" /> Centro'
            });
var format_Campo_Limpo_30 = new ol.format.GeoJSON();
var features_Campo_Limpo_30 = format_Campo_Limpo_30.readFeatures(json_Campo_Limpo_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Campo_Limpo_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Campo_Limpo_30.addFeatures(features_Campo_Limpo_30);
var lyr_Campo_Limpo_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Campo_Limpo_30, 
                style: style_Campo_Limpo_30,
                interactive: true,
                title: '<img src="styles/legend/Campo_Limpo_30.png" /> Campo_Limpo'
            });
var format_CampodaVenda_31 = new ol.format.GeoJSON();
var features_CampodaVenda_31 = format_CampodaVenda_31.readFeatures(json_CampodaVenda_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CampodaVenda_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CampodaVenda_31.addFeatures(features_CampodaVenda_31);
var lyr_CampodaVenda_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CampodaVenda_31, 
                style: style_CampodaVenda_31,
                interactive: true,
                title: '<img src="styles/legend/CampodaVenda_31.png" /> Campo da Venda'
            });
var format_Bairro_Estancia_Guatambu_32 = new ol.format.GeoJSON();
var features_Bairro_Estancia_Guatambu_32 = format_Bairro_Estancia_Guatambu_32.readFeatures(json_Bairro_Estancia_Guatambu_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bairro_Estancia_Guatambu_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bairro_Estancia_Guatambu_32.addFeatures(features_Bairro_Estancia_Guatambu_32);
var lyr_Bairro_Estancia_Guatambu_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bairro_Estancia_Guatambu_32, 
                style: style_Bairro_Estancia_Guatambu_32,
                interactive: true,
                title: '<img src="styles/legend/Bairro_Estancia_Guatambu_32.png" /> Bairro_Estancia_Guatambu'
            });
var format_AterroSanitarioPajoan_33 = new ol.format.GeoJSON();
var features_AterroSanitarioPajoan_33 = format_AterroSanitarioPajoan_33.readFeatures(json_AterroSanitarioPajoan_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AterroSanitarioPajoan_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AterroSanitarioPajoan_33.addFeatures(features_AterroSanitarioPajoan_33);
var lyr_AterroSanitarioPajoan_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AterroSanitarioPajoan_33, 
                style: style_AterroSanitarioPajoan_33,
                interactive: true,
                title: '<img src="styles/legend/AterroSanitarioPajoan_33.png" /> Aterro Sanitario Pajoan'
            });
var format_Aracare_34 = new ol.format.GeoJSON();
var features_Aracare_34 = format_Aracare_34.readFeatures(json_Aracare_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Aracare_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Aracare_34.addFeatures(features_Aracare_34);
var lyr_Aracare_34 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Aracare_34, 
                style: style_Aracare_34,
                interactive: true,
                title: '<img src="styles/legend/Aracare_34.png" /> Aracare'
            });
var format_Acafrao_35 = new ol.format.GeoJSON();
var features_Acafrao_35 = format_Acafrao_35.readFeatures(json_Acafrao_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Acafrao_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Acafrao_35.addFeatures(features_Acafrao_35);
var lyr_Acafrao_35 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Acafrao_35, 
                style: style_Acafrao_35,
                interactive: true,
                title: '<img src="styles/legend/Acafrao_35.png" /> Acafrao'
            });
var format_Univeritas_36 = new ol.format.GeoJSON();
var features_Univeritas_36 = format_Univeritas_36.readFeatures(json_Univeritas_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Univeritas_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Univeritas_36.addFeatures(features_Univeritas_36);
var lyr_Univeritas_36 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Univeritas_36, 
                style: style_Univeritas_36,
                interactive: true,
                title: '<img src="styles/legend/Univeritas_36.png" /> Univeritas'
            });
var format_Arq_Hospitais_37 = new ol.format.GeoJSON();
var features_Arq_Hospitais_37 = format_Arq_Hospitais_37.readFeatures(json_Arq_Hospitais_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arq_Hospitais_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arq_Hospitais_37.addFeatures(features_Arq_Hospitais_37);
var lyr_Arq_Hospitais_37 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arq_Hospitais_37, 
                style: style_Arq_Hospitais_37,
                interactive: true,
                title: '<img src="styles/legend/Arq_Hospitais_37.png" /> Arq_Hospitais'
            });
var format_Arq_Escolas_Municipais_38 = new ol.format.GeoJSON();
var features_Arq_Escolas_Municipais_38 = format_Arq_Escolas_Municipais_38.readFeatures(json_Arq_Escolas_Municipais_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arq_Escolas_Municipais_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arq_Escolas_Municipais_38.addFeatures(features_Arq_Escolas_Municipais_38);
var lyr_Arq_Escolas_Municipais_38 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arq_Escolas_Municipais_38, 
                style: style_Arq_Escolas_Municipais_38,
                interactive: true,
                title: '<img src="styles/legend/Arq_Escolas_Municipais_38.png" /> Arq_Escolas_Municipais'
            });
var format_Arq_Escolas_Estaduais_39 = new ol.format.GeoJSON();
var features_Arq_Escolas_Estaduais_39 = format_Arq_Escolas_Estaduais_39.readFeatures(json_Arq_Escolas_Estaduais_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Arq_Escolas_Estaduais_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Arq_Escolas_Estaduais_39.addFeatures(features_Arq_Escolas_Estaduais_39);
var lyr_Arq_Escolas_Estaduais_39 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Arq_Escolas_Estaduais_39, 
                style: style_Arq_Escolas_Estaduais_39,
                interactive: true,
                title: '<img src="styles/legend/Arq_Escolas_Estaduais_39.png" /> Arq_Escolas_Estaduais'
            });

lyr_GoogleRoad_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(false);lyr_Limit_Itaquaquecetuba_2.setVisible(true);lyr_VilaVirginia_3.setVisible(true);lyr_Una_4.setVisible(true);lyr_Tipoia_5.setVisible(true);lyr_SitioMatoDentro_6.setVisible(true);lyr_SoBento_7.setVisible(true);lyr_RioAbaixo_8.setVisible(true);lyr_Pium_9.setVisible(true);lyr_Pinheirinho_10.setVisible(true);lyr_Perobal_11.setVisible(true);lyr_Pedreira_12.setVisible(true);lyr_NovaLouzada_13.setVisible(true);lyr_MorroBranco_14.setVisible(true);lyr_MonteBelo_15.setVisible(true);lyr_Mandi_16.setVisible(true);lyr_JulioSimoes_17.setVisible(true);lyr_Jardim_Rio_Negro_18.setVisible(true);lyr_JardimPinheirinho_19.setVisible(true);lyr_JardimNicea_20.setVisible(true);lyr_JardimLucinda_21.setVisible(true);lyr_JardimJosely_22.setVisible(true);lyr_JardimAmazonas_23.setVisible(true);lyr_Jaguari_24.setVisible(true);lyr_Estacao_25.setVisible(true);lyr_Cuiab_26.setVisible(true);lyr_Corredor_27.setVisible(true);lyr_CidadeKernel_28.setVisible(true);lyr_Centro_29.setVisible(true);lyr_Campo_Limpo_30.setVisible(true);lyr_CampodaVenda_31.setVisible(true);lyr_Bairro_Estancia_Guatambu_32.setVisible(true);lyr_AterroSanitarioPajoan_33.setVisible(true);lyr_Aracare_34.setVisible(true);lyr_Acafrao_35.setVisible(true);lyr_Univeritas_36.setVisible(true);lyr_Arq_Hospitais_37.setVisible(true);lyr_Arq_Escolas_Municipais_38.setVisible(true);lyr_Arq_Escolas_Estaduais_39.setVisible(true);
var layersList = [lyr_GoogleRoad_0,lyr_GoogleSatellite_1,lyr_Limit_Itaquaquecetuba_2,lyr_VilaVirginia_3,lyr_Una_4,lyr_Tipoia_5,lyr_SitioMatoDentro_6,lyr_SoBento_7,lyr_RioAbaixo_8,lyr_Pium_9,lyr_Pinheirinho_10,lyr_Perobal_11,lyr_Pedreira_12,lyr_NovaLouzada_13,lyr_MorroBranco_14,lyr_MonteBelo_15,lyr_Mandi_16,lyr_JulioSimoes_17,lyr_Jardim_Rio_Negro_18,lyr_JardimPinheirinho_19,lyr_JardimNicea_20,lyr_JardimLucinda_21,lyr_JardimJosely_22,lyr_JardimAmazonas_23,lyr_Jaguari_24,lyr_Estacao_25,lyr_Cuiab_26,lyr_Corredor_27,lyr_CidadeKernel_28,lyr_Centro_29,lyr_Campo_Limpo_30,lyr_CampodaVenda_31,lyr_Bairro_Estancia_Guatambu_32,lyr_AterroSanitarioPajoan_33,lyr_Aracare_34,lyr_Acafrao_35,lyr_Univeritas_36,lyr_Arq_Hospitais_37,lyr_Arq_Escolas_Municipais_38,lyr_Arq_Escolas_Estaduais_39];
lyr_Limit_Itaquaquecetuba_2.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', 'Cod_Cetesb': 'Cod_Cetesb', 'Cod_ibge': 'Cod_ibge', 'Nome': 'Nome', 'UGRHI': 'UGRHI', 'Nome_ugrhi': 'Nome_ugrhi', 'AREA_KM2': 'AREA_KM2', });
lyr_VilaVirginia_3.set('fieldAliases', {'Name': 'Name', });
lyr_Una_4.set('fieldAliases', {'Name': 'Name', });
lyr_Tipoia_5.set('fieldAliases', {'Name': 'Name', });
lyr_SitioMatoDentro_6.set('fieldAliases', {'Name': 'Name', });
lyr_SoBento_7.set('fieldAliases', {'Name': 'Name', });
lyr_RioAbaixo_8.set('fieldAliases', {'Name': 'Name', });
lyr_Pium_9.set('fieldAliases', {'Name': 'Name', });
lyr_Pinheirinho_10.set('fieldAliases', {'Nome': 'Nome', });
lyr_Perobal_11.set('fieldAliases', {'Name': 'Name', });
lyr_Pedreira_12.set('fieldAliases', {'Name': 'Name', });
lyr_NovaLouzada_13.set('fieldAliases', {'Nome': 'Nome', });
lyr_MorroBranco_14.set('fieldAliases', {'Name': 'Name', });
lyr_MonteBelo_15.set('fieldAliases', {'Name': 'Name', });
lyr_Mandi_16.set('fieldAliases', {'Name': 'Name', });
lyr_JulioSimoes_17.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jardim_Rio_Negro_18.set('fieldAliases', {'Nome': 'Nome', });
lyr_JardimPinheirinho_19.set('fieldAliases', {'Nome': 'Nome', });
lyr_JardimNicea_20.set('fieldAliases', {'Nome': 'Nome', });
lyr_JardimLucinda_21.set('fieldAliases', {'Nome': 'Nome', });
lyr_JardimJosely_22.set('fieldAliases', {'Nome': 'Nome', });
lyr_JardimAmazonas_23.set('fieldAliases', {'Nome': 'Nome', });
lyr_Jaguari_24.set('fieldAliases', {'Name': 'Name', });
lyr_Estacao_25.set('fieldAliases', {'Name': 'Name', });
lyr_Cuiab_26.set('fieldAliases', {'Name': 'Name', });
lyr_Corredor_27.set('fieldAliases', {'Name': 'Name', });
lyr_CidadeKernel_28.set('fieldAliases', {'Name': 'Name', });
lyr_Centro_29.set('fieldAliases', {'Name': 'Name', });
lyr_Campo_Limpo_30.set('fieldAliases', {'Name': 'Name', });
lyr_CampodaVenda_31.set('fieldAliases', {'Name': 'Name', });
lyr_Bairro_Estancia_Guatambu_32.set('fieldAliases', {'Nome': 'Nome', });
lyr_AterroSanitarioPajoan_33.set('fieldAliases', {'Nome': 'Nome', });
lyr_Aracare_34.set('fieldAliases', {'Name': 'Name', });
lyr_Acafrao_35.set('fieldAliases', {'Name': 'Name', });
lyr_Univeritas_36.set('fieldAliases', {'Name': 'Name', 'endereco': 'endereco', });
lyr_Arq_Hospitais_37.set('fieldAliases', {'Name': 'Name', 'snippet': 'snippet', 'layer': 'layer', });
lyr_Arq_Escolas_Municipais_38.set('fieldAliases', {'Name': 'Name', 'snippet': 'snippet', 'layer': 'layer', });
lyr_Arq_Escolas_Estaduais_39.set('fieldAliases', {'Name': 'Name', 'layer': 'layer', });
lyr_Limit_Itaquaquecetuba_2.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', 'Cod_Cetesb': 'TextEdit', 'Cod_ibge': 'TextEdit', 'Nome': 'TextEdit', 'UGRHI': 'TextEdit', 'Nome_ugrhi': 'TextEdit', 'AREA_KM2': 'TextEdit', });
lyr_VilaVirginia_3.set('fieldImages', {'Name': '', });
lyr_Una_4.set('fieldImages', {'Name': '', });
lyr_Tipoia_5.set('fieldImages', {'Name': '', });
lyr_SitioMatoDentro_6.set('fieldImages', {'Name': '', });
lyr_SoBento_7.set('fieldImages', {'Name': '', });
lyr_RioAbaixo_8.set('fieldImages', {'Name': '', });
lyr_Pium_9.set('fieldImages', {'Name': '', });
lyr_Pinheirinho_10.set('fieldImages', {'Nome': '', });
lyr_Perobal_11.set('fieldImages', {'Name': '', });
lyr_Pedreira_12.set('fieldImages', {'Name': '', });
lyr_NovaLouzada_13.set('fieldImages', {'Nome': '', });
lyr_MorroBranco_14.set('fieldImages', {'Name': '', });
lyr_MonteBelo_15.set('fieldImages', {'Name': '', });
lyr_Mandi_16.set('fieldImages', {'Name': '', });
lyr_JulioSimoes_17.set('fieldImages', {'Nome': '', });
lyr_Jardim_Rio_Negro_18.set('fieldImages', {'Nome': '', });
lyr_JardimPinheirinho_19.set('fieldImages', {'Nome': '', });
lyr_JardimNicea_20.set('fieldImages', {'Nome': '', });
lyr_JardimLucinda_21.set('fieldImages', {'Nome': '', });
lyr_JardimJosely_22.set('fieldImages', {'Nome': '', });
lyr_JardimAmazonas_23.set('fieldImages', {'Nome': '', });
lyr_Jaguari_24.set('fieldImages', {'Name': '', });
lyr_Estacao_25.set('fieldImages', {'Name': '', });
lyr_Cuiab_26.set('fieldImages', {'Name': '', });
lyr_Corredor_27.set('fieldImages', {'Name': '', });
lyr_CidadeKernel_28.set('fieldImages', {'Name': '', });
lyr_Centro_29.set('fieldImages', {'Name': '', });
lyr_Campo_Limpo_30.set('fieldImages', {'Name': '', });
lyr_CampodaVenda_31.set('fieldImages', {'Name': '', });
lyr_Bairro_Estancia_Guatambu_32.set('fieldImages', {'Nome': '', });
lyr_AterroSanitarioPajoan_33.set('fieldImages', {'Nome': '', });
lyr_Aracare_34.set('fieldImages', {'Name': '', });
lyr_Acafrao_35.set('fieldImages', {'Name': '', });
lyr_Univeritas_36.set('fieldImages', {'Name': 'TextEdit', 'endereco': 'TextEdit', });
lyr_Arq_Hospitais_37.set('fieldImages', {'Name': 'TextEdit', 'snippet': 'TextEdit', 'layer': 'TextEdit', });
lyr_Arq_Escolas_Municipais_38.set('fieldImages', {'Name': 'TextEdit', 'snippet': 'TextEdit', 'layer': 'TextEdit', });
lyr_Arq_Escolas_Estaduais_39.set('fieldImages', {'Name': 'TextEdit', 'layer': 'TextEdit', });
lyr_Limit_Itaquaquecetuba_2.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', 'Cod_Cetesb': 'no label', 'Cod_ibge': 'no label', 'Nome': 'no label', 'UGRHI': 'no label', 'Nome_ugrhi': 'no label', 'AREA_KM2': 'no label', });
lyr_VilaVirginia_3.set('fieldLabels', {'Name': 'no label', });
lyr_Una_4.set('fieldLabels', {'Name': 'no label', });
lyr_Tipoia_5.set('fieldLabels', {'Name': 'no label', });
lyr_SitioMatoDentro_6.set('fieldLabels', {'Name': 'no label', });
lyr_SoBento_7.set('fieldLabels', {'Name': 'no label', });
lyr_RioAbaixo_8.set('fieldLabels', {'Name': 'no label', });
lyr_Pium_9.set('fieldLabels', {'Name': 'no label', });
lyr_Pinheirinho_10.set('fieldLabels', {'Nome': 'no label', });
lyr_Perobal_11.set('fieldLabels', {'Name': 'no label', });
lyr_Pedreira_12.set('fieldLabels', {'Name': 'no label', });
lyr_NovaLouzada_13.set('fieldLabels', {'Nome': 'no label', });
lyr_MorroBranco_14.set('fieldLabels', {'Name': 'no label', });
lyr_MonteBelo_15.set('fieldLabels', {'Name': 'no label', });
lyr_Mandi_16.set('fieldLabels', {'Name': 'no label', });
lyr_JulioSimoes_17.set('fieldLabels', {'Nome': 'no label', });
lyr_Jardim_Rio_Negro_18.set('fieldLabels', {'Nome': 'no label', });
lyr_JardimPinheirinho_19.set('fieldLabels', {'Nome': 'no label', });
lyr_JardimNicea_20.set('fieldLabels', {'Nome': 'no label', });
lyr_JardimLucinda_21.set('fieldLabels', {'Nome': 'no label', });
lyr_JardimJosely_22.set('fieldLabels', {'Nome': 'no label', });
lyr_JardimAmazonas_23.set('fieldLabels', {'Nome': 'no label', });
lyr_Jaguari_24.set('fieldLabels', {'Name': 'no label', });
lyr_Estacao_25.set('fieldLabels', {'Name': 'no label', });
lyr_Cuiab_26.set('fieldLabels', {'Name': 'no label', });
lyr_Corredor_27.set('fieldLabels', {'Name': 'no label', });
lyr_CidadeKernel_28.set('fieldLabels', {'Name': 'no label', });
lyr_Centro_29.set('fieldLabels', {'Name': 'no label', });
lyr_Campo_Limpo_30.set('fieldLabels', {'Name': 'no label', });
lyr_CampodaVenda_31.set('fieldLabels', {'Name': 'no label', });
lyr_Bairro_Estancia_Guatambu_32.set('fieldLabels', {'Nome': 'no label', });
lyr_AterroSanitarioPajoan_33.set('fieldLabels', {'Nome': 'no label', });
lyr_Aracare_34.set('fieldLabels', {'Name': 'no label', });
lyr_Acafrao_35.set('fieldLabels', {'Name': 'header label', });
lyr_Univeritas_36.set('fieldLabels', {'Name': 'no label', 'endereco': 'no label', });
lyr_Arq_Hospitais_37.set('fieldLabels', {'Name': 'no label', 'snippet': 'no label', 'layer': 'no label', });
lyr_Arq_Escolas_Municipais_38.set('fieldLabels', {'Name': 'no label', 'snippet': 'no label', 'layer': 'no label', });
lyr_Arq_Escolas_Estaduais_39.set('fieldLabels', {'Name': 'no label', 'layer': 'no label', });
lyr_Arq_Escolas_Estaduais_39.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});