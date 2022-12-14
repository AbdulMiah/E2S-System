import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "./Graph.css";
import Plot from "react-plotly.js";
import ReactLoading from "react-loading";

export interface IDoubleGraph {
    xData0: Date[];
    yData0: number[];
    yData1: number[];
    xName: string;
    yName: string;
    lineColour0: string;
    lineColour1: string;
    name0: string;
    name1: string;
}

interface DoubleGraphProps {
    graphData: IDoubleGraph;
    isLoading?: Boolean;
}

function DoubleGraph({ graphData, isLoading }: DoubleGraphProps) {
    return (
        <Card className="largeGraphCard  flex-fill">
            {isLoading ? (
                <ReactLoading
                    className="loaderAlignment"
                    type="spin"
                    color="#73a6ba"
                    height={"20%"}
                    width={"20%"}
                />
            ) : (
                <div className="graph" data-testid="graphElement">
                    <Plot
                        data={[
                            {
                                x: graphData.xData0,
                                y: graphData.yData0,
                                type: "scatter",
                                name: graphData.name0,
                                line: {
                                    color: graphData.lineColour0,
                                },
                            },
                            {
                                x: graphData.xData0,
                                y: graphData.yData1,
                                type: "scatter",
                                name: graphData.name1,
                                line: {
                                    color: graphData.lineColour1,
                                },
                            },
                        ]}
                        useResizeHandler
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                        layout={{
                            autosize: true,
                            xaxis: {
                                autorange: true,
                                range: ["2015-02-17", "2017-02-16"],
                                rangeselector: {
                                    buttons: [
                                        {
                                            count: 1,
                                            label: "Day",
                                            step: "day",
                                            stepmode: "backward",
                                        },
                                        {
                                            count: 6,
                                            label: "Week",
                                            step: "day",
                                            stepmode: "backward",
                                        },
                                        {
                                            label: "Month",
                                            step: "month",
                                            stepmode: "backward",
                                        },
                                    ],
                                },
                                rangeslider: {
                                    range: [
                                        graphData.xData0[0],
                                        graphData.xData0[-1],
                                    ],
                                },
                                type: "date",
                            },
                            yaxis: {
                                title: graphData.yName,
                                titlefont: {
                                    size: 16,
                                },
                                autorange: true,
                                range: [86.8700008333, 138.870004167],
                                type: "linear",
                            },
                            margin: {
                                b: 20,
                                t: 50,
                                r: 0,
                                l: 70,
                            },
                        }}
                    />
                </div>
            )}
        </Card>
    );
}

export default DoubleGraph;
