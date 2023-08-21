import { Chart, LinearScale } from 'chart.js/auto';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

Chart.register(LinearScale);

interface MonthLabel {
    day: string;
    amount: string;
}

interface Data {
    data: string[];
    tension: number;
    borderColor: string;
    pointBorderColor: string;
    backgroundColor: CanvasGradient;
    fill: boolean;
    spanGaps: boolean;
}

interface ChartLine {
    labels: string[];
    datasets: Data[];
}

const dataList: MonthLabel[] = [
    { day: '01', amount: '3450' },
    { day: '07', amount: '3500' },
    { day: '13', amount: '3400' },
    { day: '19', amount: '3400' },
    { day: '25', amount: '3340' },
    { day: '31', amount: '3420' },
];

function LineChart() {
    const [chartData, setChartData] = useState<ChartLine>({
        labels: [],
        datasets: [
            {
                data: [],
                tension: 0.5,
                borderColor: '#FF993C',
                pointBorderColor: 'transparent',
                backgroundColor: {} as CanvasGradient,
                fill: true,
                spanGaps: true,
            },
        ],
    });

    const LinearGradientBackground = () => {
        const color = document.createElement('canvas').getContext('2d');
        if (color) {
            const gradient = color.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, '#5185F7');
            gradient.addColorStop(0.9, '#FFFFFF');
            return gradient;
        }
        return {} as CanvasGradient;
    };

    useEffect(() => {
        setChartData({
            labels: dataList.map((month) => month.day),
            datasets: [
                {
                    data: dataList.map((month) => month.amount),
                    tension: 0.5,
                    fill: true,
                    spanGaps: true,
                    borderColor: '#5185F7',
                    pointBorderColor: 'transparent',
                    backgroundColor: LinearGradientBackground(),
                },
            ],
        });
    }, []);

    const options = {
        responsive: false,
        scales: {
            y: {
                ticks: {
                    stepSize: 40,
                },
            },
            x: {
                grid: {
                    display: false,
                    drawTicks: false,
                    drawBorder: false,
                    drawOnChartArea: false,
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        elements: {
            point: {
                radius: 0,
                hoverRadius: 0,
            },
        },
    };

    return <Line width={750} data={chartData} height={300} options={options} />;
}

export default LineChart;
