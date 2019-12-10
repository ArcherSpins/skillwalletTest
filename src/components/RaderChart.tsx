import React, { useEffect, useState } from 'react';
import { Platform } from 'react-native';
import { WebView } from 'react-native-webview';
import { Asset } from 'expo-asset';

const assetHtml = require('../../assets/html/charts.html');

const download = async () => {
  let file = Asset.fromModule(assetHtml);
  if (file.localUri !== null) return file;
  await file.downloadAsync();

  return file;
};

const getSource = file => {
  if (Platform.OS !== 'android') return assetHtml;
  if (file === null) return {};

  return { uri: file.localUri };
};

const RadarChart = ({ badges }) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'android') {
      download().then(downloadFile => {
        setFile(downloadFile);
      });
    }
  }, []);

  const scores = [0, 0, 0, 0, 0, 0];
  badges.forEach(badge => {
    scores.forEach((score, idx) => {
      scores[idx] = score + badge.score[idx];
    });
  });

  const js = `
    var ctx = document.getElementById('chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['行動力', '技術力', '影響力', '社交性', '専門知識', '継続力'],
        datasets: [{
          backgroundColor: 'rgba(255, 105, 180, .2)',
          pointBackgroundColor: '#ff69b4',
          borderWidth: 0,
          data: [${scores.toString()}],
        }],
      },
      options: {
        animation: {
          duration: 2000
        },
        showTooltips: false,
        legend: {
          display: false,
        },
        responsive: true,
        scale: {
          display: true,
          pointLabels: {
            fontSize: 20,
            fontColor: '#231815',
          },
          ticks: {
            display: false
          },
          gridLines: {
            display: true,
            color: '#EAEAEA',
          },
        },
      },
    });
  `;

  return (
    <WebView
      allowFileAccess={true}
      source={getSource(file)}
      injectedJavaScript={js}
      startInLoadingState
    />
  );
};

export default RadarChart;
