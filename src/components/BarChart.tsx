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
      type: 'horizontalBar',
      data: {
        labels: ['行動力', '技術力', '影響力', '社交性', '専門知識', '継続力'],
        datasets: [{
          backgroundColor: [
            'rgba(220, 20, 60, .2)',
            'rgba(254, 159, 65, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(55, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
          ],
          borderColor: ['#dc143c', '#FE9F41', '#FFCD56', '#4BC0C0', '#37A2EB', '#9966FF'],
          borderWidth: 1,
          data: [${scores.toString()}],
        }],
      },
      options: {
        animation: {
          duration: 2000
        },
        responsive: true,
        legend: {
          display: false,
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
