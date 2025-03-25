$(window).load(function() {
    $(".loading").fadeOut()
})
$(function() {
    //echarts_1();
    //echarts_2();
    echarts_3();
    echarts_4();
    echarts_5();
    echarts_6();
   // echarts_7();
    zb1();
    zb2();
    zb3();
    zb4();
    zb5();
    zb6();

    function echarts_1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart1'));
        option = {
            tooltip: {
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                right: 0,
                top: 30,
                height: 160,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                },
                orient: 'vertical',
                data: ['TES', 'JDG', 'V5', 'IG', 'SN']
            },
            calculable: true,
            series: [{
                name: ' ',
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9', '#c96262', '#c25775', '#00b7be'],
                type: 'pie',
                radius: [30, 70],
                center: ['35%', '50%'],
                roseType: 'radius',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },

                lableLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },

                data: [{
                        value: 10,
                        name: 'IG'
                    },
                    {
                        value: 5,
                        name: 'SN'
                    },
                    {
                        value: 15,
                        name: 'V5'
                    },
                    {
                        value: 25,
                        name: 'TES'
                    },
                    {
                        value: 20,
                        name: 'JDG'
                    },

                ]
            }, ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        // var myChart = echarts.init(document.getElementById('echart2'));

        // option = {
        //     tooltip: {
        //         trigger: 'item',
        //         formatter: "{b} : {c} ({d}%)"
        //     },
        //     legend: {

        //         top: '15%',
        //         data: ['LNG\nLight', 'RNG\nXLB', 'FPX\nDoinb', 'IG\nTheShy', 'TES\nknight'],
        //         icon: 'circle',
        //         textStyle: {
        //             color: 'rgba(255,255,255,.6)',
        //         }
        //     },
        //     calculable: true,
        //     series: [{
        //         name: '',
        //         color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#c96262'],
        //         type: 'pie',
        //         //起始角度，支持范围[0, 360]
        //         startAngle: 0,
        //         //饼图的半径，数组的第一项是内半径，第二项是外半径
        //         radius: [51, 100],
        //         //支持设置成百分比，设置成百分比时第一项是相对于容器宽度，第二项是相对于容器高度
        //         center: ['50%', '45%'],

        //         //是否展示成南丁格尔图，通过半径区分数据大小。可选择两种模式：
        //         // 'radius' 面积展现数据的百分比，半径展现数据的大小。
        //         //  'area' 所有扇区面积相同，仅通过半径展现数据大小
        //         roseType: 'area',
        //         //是否启用防止标签重叠策略，默认开启，圆环图这个例子中需要强制所有标签放在中心位置，可以将该值设为 false。
        //         avoidLabelOverlap: false,
        //         label: {
        //             normal: {
        //                 show: true,
        //                 //  formatter: '{c}辆'
        //             },
        //             emphasis: {
        //                 show: true
        //             }
        //         },
        //         labelLine: {
        //             normal: {
        //                 show: true,
        //                 length2: 1,
        //             },
        //             emphasis: {
        //                 show: true
        //             }
        //         },
        //         data: [{
        //                 value: 1,
        //                 name: 'LNG\nLight',
        //             },
        //             {
        //                 value: 4,
        //                 name: 'RNG\nXLB',
        //             },
        //             {
        //                 value: 5,
        //                 name: 'FPX\nDoinb',
        //             },
        //             {
        //                 value: 6,
        //                 name: 'IG\nTheShy',
        //             },
        //             {
        //                 value: 9,
        //                 name: 'TES\nknight',
        //             },



        //             {
        //                 value: 0,
        //                 name: "",
        //                 label: {
        //                     show: false
        //                 },
        //                 labelLine: {
        //                     show: false
        //                 }
        //             },
        //             {
        //                 value: 0,
        //                 name: "",
        //                 label: {
        //                     show: false
        //                 },
        //                 labelLine: {
        //                     show: false
        //                 }
        //             },
        //             {
        //                 value: 0,
        //                 name: "",
        //                 label: {
        //                     show: false
        //                 },
        //                 labelLine: {
        //                     show: false
        //                 }
        //             },
        //             {
        //                 value: 0,
        //                 name: "",
        //                 label: {
        //                     show: false
        //                 },
        //                 labelLine: {
        //                     show: false
        //                 }
        //             },
        //             {
        //                 value: 0,
        //                 name: "",
        //                 label: {
        //                     show: false
        //                 },
        //                 labelLine: {
        //                     show: false
        //                 }
        //             },


        //         ]
        //     }]
        // };

        // // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
        // window.addEventListener("resize", function() {
        //     myChart.resize();
        // });
    }

    function echarts_3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart3'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {

                //icon: 'vertical',
                data: ['一次风量设定值', '一次风量实际值', '热一次风量设定值'],
                //align: 'center',
                // right: '35%',
                top: '0',
                textStyle: {
                    color: "#fff"
                },
                // itemWidth: 15,
                // itemHeight: 15,
                itemGap: 20,
            },
            grid: {
                left: '0',
                right: '20',
                top: '10',
                bottom: '20',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,1)',
                        fontSize: 11
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                data: ['\n0', '\n1000', '\n2000', '\n3000', '\n4000', '\n5000', '\n6000', '\n7000',
                    '\n8000', '\n9000', '\n10000', '\n11000'
                ]
            }, {




            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [{
                name: '一次风量设定值',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(24, 163, 64, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(24, 163, 64, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#cdba00',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12
                    }
                },
                data: [205, 191, 239, 169, 205, 125, 162, 136, 189, 157, 121, 158]
            }, {
                name: '一次风量实际值',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(39, 122,206, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,206, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#277ace',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12
                    }
                },
                data: [266, 289, 299, 345, 278, 375, 270, 270, 286, 315, 304, 220]
            }, {
                name: '热一次风量设定值',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(39, 122,206, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,206, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#67E0E3',
                        borderColor: 'rgba(10,148,236,0.5)',
                        borderWidth: 12
                    }
                },
                data: [119, 124, 76, 122, 117, 136, 115, 73, 102, 115, 107, 81]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    // function echarts_4() {
    //     // 基于准备好的dom，初始化echarts实例
    //     var myChart = echarts.init(document.getElementById('echart4'));
    //     option = {
    //         tooltip: {
    //             trigger: 'axis',
    //             axisPointer: {
    //                 lineStyle: {
    //                     color: '#57617B'
    //                 }
    //             }
    //         },
    //         "legend": {

    //             "data": [{
    //                     "name": "Victory"
    //                 },
    //                 {
    //                     "name": "Defeat"
    //                 },
    //                 {
    //                     "name": "胜率"
    //                 }
    //             ],
    //             "top": "0%",
    //             "textStyle": {
    //                 "color": "rgba(255,255,255,1)", //图例文字
    //                 "fontSize": "16"
    //             }
    //         },

    //         "xAxis": [{
    //             "type": "category",

    //             data: ['BLG', 'VG', 'FPX', 'EDG', 'RNG', 'LGD', 'WE', 'SN', 'IG', 'V5', 'JDG', 'TES'],
    //             axisLine: {
    //                 lineStyle: {
    //                     color: "rgba(255,255,255,.1)"
    //                 }
    //             },
    //             axisLabel: {
    //                 textStyle: {
    //                     color: "rgb(255,255,255)",
    //                     fontSize: '16',
    //                 },
    //             },

    //         }, ],
    //         "yAxis": [{
    //                 "type": "value",
    //                 "name": "次数",
    //                 "min": 0,
    //                 "interval": 10,
    //                 "axisLabel": {
    //                     "show": true,

    //                 },
    //                 axisLine: {
    //                     lineStyle: {
    //                         color: 'rgba(255,255,255,1)'
    //                     }
    //                 }, //左线色
    //                 splitLine: {
    //                     show: true,
    //                     lineStyle: {
    //                         color: "rgba(255,255,255,0.5)"
    //                     }
    //                 }, //x轴线
    //             },
    //             {
    //                 "type": "value",
    //                 "name": "胜率",
    //                 "show": true,
    //                 "axisLabel": {
    //                     "show": true,

    //                 },
    //                 axisLine: {
    //                     lineStyle: {
    //                         color: 'rgba(255,255,255,1 )'
    //                     }
    //                 }, //右线色
    //                 splitLine: {
    //                     show: true,
    //                     lineStyle: {
    //                         color: "rgba(255,255,255,0.2)"
    //                     }
    //                 }, //x轴线
    //             },
    //         ],
    //         "grid": {
    //             "top": "10%",
    //             "right": "30",
    //             "bottom": "30",
    //             "left": "30",
    //         },
    //         "series": [{
    //                 "name": "Victory",

    //                 "type": "bar",
    //                 "data": [17, 19, 23, 20, 21, 29, 25, 31, 26, 30, 33, 33],
    //                 "barWidth": "auto",
    //                 "itemStyle": {
    //                     "normal": {
    //                         "color": {
    //                             "type": "linear",
    //                             "x": 0,
    //                             "y": 0,
    //                             "x2": 0,
    //                             "y2": 1,
    //                             "colorStops": [{
    //                                     "offset": 0,
    //                                     "color": "#67E0E3"
    //                                 },

    //                                 {
    //                                     "offset": 1,
    //                                     "color": "#67E0E3"
    //                                 }
    //                             ],
    //                             "globalCoord": false
    //                         }
    //                     }
    //                 }
    //             },
    //             {
    //                 "name": "Defeat",
    //                 "type": "bar",
    //                 "data": [
    //                     22, 22, 22, 18, 18, 25, 22, 21, 18, 19, 15, 12
    //                 ],
    //                 "barWidth": "auto",

    //                 "itemStyle": {
    //                     "normal": {
    //                         "color": {
    //                             "type": "linear",
    //                             "x": 0,
    //                             "y": 0,
    //                             "x2": 0,
    //                             "y2": 1,
    //                             "colorStops": [{
    //                                     "offset": 0,
    //                                     "color": "#FFDB5C"
    //                                 },
    //                                 {
    //                                     "offset": 1,
    //                                     "color": "#FFDB5C"
    //                                 }
    //                             ],
    //                             "globalCoord": false
    //                         }
    //                     }
    //                 },
    //                 "barGap": "0"
    //             },
    //             {
    //                 "name": "胜率",
    //                 "type": "line",
    //                 "yAxisIndex": 1,

    //                 "data": [43, 46, 51, 52, 53, 53, 53, 59, 59, 61, 68, 73],
    //                 lineStyle: {
    //                     normal: {
    //                         width: 2
    //                     },
    //                 },
    //                 "itemStyle": {
    //                     "normal": {
    //                         "color": "#48f593",

    //                     }
    //                 },
    //                 "smooth": true
    //             }
    //         ]
    //     };


    //     // 使用刚指定的配置项和数据显示图表。
    //     myChart.setOption(option);
    //     window.addEventListener("resize", function() {
    //         myChart.resize();
    //     });
    // }

    function echarts_4() {
        var myChart = echarts.init(document.getElementById('echart4'));
        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'shadow'
                },
                formatter: function(params) {
                    let res = params[0].name + '<br>';
                    params.forEach(item => {
                        let unit = '';
                        if (item.seriesName === '超调量') unit = '%';
                        if (item.seriesName === '调节时间') unit = 's';
                        res += `${item.marker} ${item.seriesName}: ${item.value}${unit}<br>`;
                    });
                    return res;
                }
            },
            legend: {
                data: ['超调量', '调节时间', 'IAE', 'ISE'],
                top: '0%',
                textStyle: {
                    color: "rgba(255,255,255,1)",
                    fontSize: 16
                }
            },
            xAxis: [{
                type: 'category',
                data: ['PID', 'ADRC', 'GPC', '解耦控制', '前馈控制', '串级控制'],
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.1)"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "rgb(255,255,255)",
                        fontSize: 16
                    }
                }
            }],
            yAxis: [
                {
                    type: 'value',
                    name: '超调量 (%)',
                    min: 10,
                    max: 100,
                    interval: 20,
                    axisLabel: {
                        formatter: '{value}%',
                        color: 'rgba(255, 255, 255, 0.51)'
                    },
                    splitLine: {
                        lineStyle: {
                            color: "rgba(255,255,255,.1)"
                        }
                    },
                    nameTextStyle: {
                        color: "rgb(255,255,255)" // 将超调量 y 轴名称文字颜色改为绿色，可根据需求调整
                    }
                },
                {
                    type: 'value',
                    name: '调节时间 (s)',
                    position: 'right',
                    axisLabel: {
                        color: 'rgba(255,255,255,.6)'
                    },
                    splitLine: {show: false},
                    nameTextStyle: {
                        color: "rgb(255,255,255)" //  y 轴名称文字颜色改为绿色，可根据需求调整
                    }
                }
               
            ],
            grid: {
                top: '15%',
                right: '15%',
                bottom: '15%',
                left: '10%'
            },
            series: [
                {
                    name: '超调量',
                    type: 'bar',
                    data: [25, 18, 22, 15, 20, 17], // 示例数据，需替换实际值
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {offset: 0, color: '#67E0E3'},
                            {offset: 1, color: '#2f89cf'}
                        ])
                    },
                    barWidth: '20%'
                },
                {
                    name: '调节时间',
                    type: 'bar',
                    yAxisIndex: 1,
                    data: [4.5, 3.8, 5.2, 4.0, 4.3, 3.5], // 示例数据，需替换实际值
                    itemStyle: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                            {offset: 0, color: '#FFDB5C'},
                            {offset: 1, color: '#ff9f7f'}
                        ])
                    },
                    barWidth: '20%'
                },
                {
                    name: 'IAE',
                    type: 'line',
                    smooth: true,
                    data: [16, 18, 25, 14, 12, 15], // 示例数据，需替换实际值
                    symbol: 'circle',
                    symbolSize: 8,
                    itemStyle: {
                        color: '#48f593'
                    },
                    lineStyle: {
                        width: 3
                    }
                },
                {
                    name: 'ISE',
                    type: 'line',
                    smooth: true,
                    data: [25, 18, 36, 25, 20, 36], // 示例数据，需替换实际值
                    symbol: 'circle',
                    symbolSize: 8,
                    itemStyle: {
                        color: '#FB7293'
                    },
                    lineStyle: {
                        width: 3
                    }
                }
            ]
        };
    
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }   
    function echarts_5() {
        // 基于准备好的dom，初始化echarts实例
        // var myChart = echarts.init(document.getElementById('echart5'));
        // var option = {
        //     tooltip: {
        //         trigger: 'axis',
        //         axisPointer: { // 坐标轴指示器，坐标轴触发有效
        //             type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        //         }
        //     },
        //     legend: {
        //         data: ['出场次数', '总击杀', '总助攻', '总死亡', ],
        //         textStyle: {
        //             color: 'skyblue'
        //         }
        //     },
        //     grid: {
        //         left: '3%',
        //         right: '4%',
        //         bottom: '3%',
        //         containLabel: true
        //     },
        //     xAxis: {
        //         type: 'value',
        //         axisLine: {
        //             lineStyle: {
        //                 color: 'rgba(255,255,255,1)'
        //             }
        //         }, //左线色
        //     },
        //     yAxis: {
        //         type: 'category',
        //         axisLine: {
        //             lineStyle: {
        //                 color: 'rgba(255,255,255,1)'
        //             }
        //         }, //左线色
        //         splitLine: {
        //             show: true,
        //             lineStyle: {
        //                 color: "rgba(255,255,255,.1)"
        //             }
        //         }, //x轴线
        //         data: ['WeJiumeng', 'LGDxiye', 'TESknight', 'JDGKanavi', 'JackeyLove', 'SNSofM', 'V5Mole', 'EDGScout', 'SNhuanfeng', 'FPXDoinb']
        //     },
        //     series: [{
        //             name: '出场次数',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: '#37A2DA'
        //             },
        //             label: {
        //                 show: false,
        //                 position: 'insideRight'
        //             },
        //             data: [47, 52, 44, 48, 42, 52, 49, 37, 52, 45]
        //         },
        //         {
        //             name: '总击杀',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: '#67E0E3'
        //             },
        //             label: {
        //                 show: false,
        //                 position: 'insideRight'
        //             },
        //             data: [205, 191, 239, 169, 205, 125, 162, 136, 189, 157]
        //         },
        //         {
        //             name: '总助攻',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: '#FFDB5C'
        //             },
        //             label: {
        //                 show: false,
        //                 position: 'insideRight'
        //             },
        //             data: [266, 289, 299, 345, 278, 375, 270, 286, 315, 304]
        //         },
        //         {
        //             name: '总死亡',
        //             type: 'bar',
        //             stack: '总量',
        //             itemStyle: {
        //                 color: '#FF9F7F'
        //             },
        //             label: {
        //                 show: false,
        //                 position: 'insideRight'
        //             },
        //             data: [119, 124, 76, 122, 117, 136, 115, 73, 102, 115]
        //         },

        //     ]
        // };
        // // 使用刚指定的配置项和数据显示图表。
        // myChart.setOption(option);
        // window.addEventListener("resize", function() {
        //     myChart.resize();
        // });

        var myChart = echarts.init(document.getElementById('echart5'));
        option = {

            title: [
                {
                text: '互信息变量对',
                left: 10, // 水平居中
                top: 40, // 距离顶部 10px，可按需调整
                textStyle: {
                    color: 'rgba(255,255,255,1)', // 文字颜色
                    fontSize: 18 // 文字大小
                }
            },
            // {
            //     text: '自动建议策略',
            //     left: 'center',
            //     bottom: 10,
            //     textStyle: {
            //         color: 'rgba(255,255,255,1)',
            //         fontSize: 15
            //     }
            // }
            // {
            //     text: '高互控制信息量 ——>建议解耦控制',
            //     left: 'center',
            //     bottom: 10,
            //     textStyle: {
            //         color: 'rgba(255,255,255,1)',
            //         fontSize: 15
            //     }
            // }
            // {
            //     text: '高互控制扰动量 ——>建议前馈控制',
            //     left: 'center',
            //     bottom: 10,
            //     textStyle: {
            //         color: 'rgba(255,255,255,1)',
            //         fontSize: 15
            //     }
            // }
            {
                text: '自动建议策略:',
                left: 'left',
                bottom: 45,
                textStyle: {
                    color: 'rgba(255,255,255,1)',
                    fontSize: 18
                }
            },
            {
                text: '高互控制信息量 ——>建议解耦控制',
                left: 'center',
                bottom: 20,
                textStyle: {
                    color: 'rgba(255,255,255,1)',
                    fontSize: 18
                }
            },
            {
                text: '高互控制扰动量 ——>建议前馈控制',
                left: 'center',
                bottom: 0,
                textStyle: {
                    color: 'rgba(255,255,255,1)',
                    fontSize: 18
                }
            }

        ],
           
            
        
            tooltip: {
                
                trigger: 'item',
                formatter: "{b} : {c} ({d}%)"
            },
            legend: {
                right: 0,
                top: 30,
                height: 50,
                itemWidth: 10,
                itemHeight: 10,
                itemGap: 10,
                textStyle: {
                    color: 'rgba(255,255,255,.6)',
                    fontSize: 12
                },
                orient: 'vertical',
                data: ['变量A', '变量B', '变量C', '变量D', '变量E']
            },
            calculable: true,
            series: [{
                name: ' ',
                color: ['#62c98d', '#2f89cf', '#4cb9cf', '#53b666', '#62c98d', '#205acf', '#c9c862', '#c98b62', '#c962b9', '#7562c9', '#c96262', '#c25775', '#00b7be'],
                type: 'pie',
                radius: [30, 70],
                center: ['35%', '50%'],
                roseType: 'radius',
                label: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },

                lableLine: {
                    normal: {
                        show: true
                    },
                    emphasis: {
                        show: true
                    }
                },

                data: [{
                        value: 10,
                        name: '变量A'
                    },
                    {
                        value: 5,
                        name: '变量B'
                    },
                    {
                        value: 15,
                        name: '变量C'
                    },
                    {
                        value: 25,
                        name: '变量D'
                    },
                    {
                        value: 20,
                        name: '变量E'
                    },

                ]
            }, ]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }



    function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));

        option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    lineStyle: {
                        color: '#57617B'
                    }
                }
            },
            legend: {

                //icon: 'vertical',
                data: ['一次风量设定值', '一次风量实际值', '热一次风量设定值'],
                //align: 'center',
                // right: '35%',
                top: '0',
                textStyle: {
                    color: "#fff"
                },
                // itemWidth: 15,
                // itemHeight: 15,
                itemGap: 20,
            },
            grid: {
                left: '0',
                right: '20',
                top: '10',
                bottom: '20',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: false,
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,1)',
                        fontSize: 11
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                data: ['\n0', '\n1000', '\n2000', '\n3000', '\n4000', '\n5000', '\n6000', '\n7000',
                    '\n8000', '\n9000', '\n10000', '\n11000'
                ]
            }, {




            }],
            yAxis: [{
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: 'rgba(255,255,255,.6)'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,.1)'
                    }
                }
            }],
            series: [{
                name: '一次风量设定值',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(24, 163, 64, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(24, 163, 64, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#cdba00',
                        borderColor: 'rgba(137,189,2,0.27)',
                        borderWidth: 12
                    }
                },
                data: [205, 191, 239, 169, 205, 125, 162, 136, 189, 157, 121, 158]
            }, {
                name: '一次风量实际值',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(39, 122,206, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,206, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#277ace',
                        borderColor: 'rgba(0,136,212,0.2)',
                        borderWidth: 12
                    }
                },
                data: [266, 289, 299, 345, 278, 375, 270, 270, 286, 315, 304, 220]
            }, {
                name: '热一次风量设定值',
                type: 'line',
                smooth: true,
                symbol: 'circle',
                symbolSize: 5,
                showSymbol: false,
                lineStyle: {
                    normal: {
                        width: 2
                    }
                },
                areaStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(39, 122,206, 0.3)'
                        }, {
                            offset: 0.8,
                            color: 'rgba(39, 122,206, 0)'
                        }], false),
                        shadowColor: 'rgba(0, 0, 0, 0.1)',
                        shadowBlur: 10
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#67E0E3',
                        borderColor: 'rgba(10,148,236,0.5)',
                        borderWidth: 12
                    }
                },
                data: [119, 124, 76, 122, 117, 136, 115, 73, 102, 115, 107, 81]
            }]
        };

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }



    
    function zb1() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb1'));
        var v2 = 33 //胜利
        var v1 = 12 //战败
        var v3 = v1 + v2 //总消费 
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#37A2DA',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '胜利',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '战败',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '胜率' + Math.round(v2 / v3 * 100) + '%'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb2'));
        var v1 = 738 //总击杀
        var v2 = 542 //总死亡
        var v3 = v1 + v2 //
        option = {

            tooltip: {
                trigger: 'item',
            },
            series: [{
                type: 'pie',
                radius: ['60%', '70%'],
                color: '#32C5E9',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v1,
                    name: '总击杀',
                    label: {
                        normal: {
                            formatter: v1 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v2,
                    name: '总死亡',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总击杀'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb3() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb3'));
        var v1 = 51 //排眼
        var v2 = 121 //插眼
        var v3 = v1 + v2 //总消费 
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#67E0E3',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '插眼',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '排眼',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总插眼'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb4'));
        var v1 = 76 //死亡
        var v2 = 239 //击杀
        var v3 = v1 + v2

        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#9FE6B8',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '击杀',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '死亡',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总击杀'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb5() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb5'));
        var v1 = 348 //助攻和击杀
        var v2 = 165 //死亡
        var v3 = v1 + v2 //总消费
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#FFDB5C',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '总死亡',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '击杀和助攻',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return '总死亡'
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }

    function zb6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('zb6'));
        var k = 19;
        var a = 34;
        var d = 7;
        var v1 = d //死亡
        var v2 = k + a //击杀和助攻
        option = {
            tooltip: {
                trigger: 'item',
            },
            series: [{

                type: 'pie',
                radius: ['60%', '70%'],
                color: '#FB7293',
                label: {
                    normal: {
                        position: 'center'
                    }
                },
                data: [{
                    value: v2,
                    name: '击杀和助攻',
                    label: {
                        normal: {
                            formatter: v2 + '',
                            textStyle: {
                                fontSize: 20,
                                color: '#fff',
                            }
                        }
                    }
                }, {
                    value: v1,
                    name: '死亡',
                    label: {
                        normal: {
                            formatter: function(params) {
                                return 'KDA：' + Math.round((k + a) / d)
                            },
                            textStyle: {
                                color: '#aaa',
                                fontSize: 12
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: 'rgba(255,255,255,.2)'
                        },
                        emphasis: {
                            color: '#fff'
                        }
                    },
                }]
            }]
        };
        myChart.setOption(option);
        window.addEventListener("resize", function() {
            myChart.resize();
        });
    }
})