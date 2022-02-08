import React, { Component } from 'react';
import { StyleSheet,ScrollView,StatusBar, View, Text,TouchableOpacity, Alert } from 'react-native';
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import PieChart from 'react-native-pie-chart';
import { BarChart, Grid,XAxis, YAxis, LineChart } from 'react-native-svg-charts';
 
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['', 'Product', 'Price', 'Country','Year','Quantity'],
      tableData: [
        ['','Turneric', '10', 'India' ,'2018','5 KG'],
        ['','Aswagandha', '18', 'US','2017','6KG'],
        ['','Cinamon', '19', 'China','2018','5KG'],
        ['','Kelp powder','20', 'US', '2017','7KG'],
        ['','Glinger Powder','10','India', '2018','9KG']
      ],
    }
  }

  eliminateDuplicates(arr) {
    var i,
        len = arr.length,
        out = [],
        obj = {};
  
    for (i = 0; i < len; i++) {
      obj[arr[i]] = 0;
    }
    for (i in obj) {
      out.push(i);
    }
    return out;
  }
 
  _alertIndex(index) {
    var contacts = [...this.state.tableData];
    contacts.splice(index, 1);
    this.setState({tableData : contacts});
  }
 
  render() {
    const state = this.state;
    const widthAndHeight = 250
    const series = [123, 321, 123, 100, 537]
    const sliceColor = ['#F44336','#2196F3','#FFEB3B', '#4CAF50', '#FF9800']
    const data1 = [14, 48, 6, 13]
      .map((value) => ({ value }))
   

      const data = [ 10, 5, 25, 15, 20 ]

      const CUT_OFF = 10
      const Labels = ({ x, y, bandwidth, data }) => (
          data.map((value, index) => (
              <Text
                  key={ index }
                  x={ x(index) + (bandwidth / 2) }
                  y={ value < CUT_OFF ? y(value) - 10 : y(value) + 15 }
                  fontSize={ 16 }
                  fill={ value >= CUT_OFF ? 'white' : 'black' }
                  alignmentBaseline={ 'middle' }
                  textAnchor={ 'middle' }
              >
                  {value}
              </Text>
          ))
      )
    const barData = [
      {
        data: state.tableData.map((rowData,index) => rowData[2]).map(i=>Number(i)).map((value) => ({ value })),
        labels: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        svg: {
          fill: 'blue',
          
        },
      },
      
    ]

    const contentInset = { top: 20, bottom: 20 }
    const element = (data, index) => (
      <TouchableOpacity onPress={() => this._alertIndex(index)}>
        <View style={styles.btn}>
          <Text style={styles.btnText}>Delete</Text>
        </View>
      </TouchableOpacity>
    );

    console.log(
      state.tableData.map((rowData,index) => rowData[4]).map(i=>Number(i)).filter((q, idx) => 
      state.tableData.map((rowData,index) => rowData[4]).map(i=>Number(i)).indexOf(q) === idx)
    );
    
 
    return (
      <View style={styles.container}>
        <ScrollView>
        <Table borderStyle={{borderColor: 'transparent'}}>
          <Row data={state.tableHead} style={styles.head} textStyle={styles.text}/>
          {
            state.tableData.map((rowData, index) => (
              <TableWrapper key={index} style={styles.row}>
                {
                  rowData.map((cellData, cellIndex) => (
                    <Cell key={cellIndex} data={cellIndex === 0 ? element(cellData, index) : cellData} textStyle={styles.text}/>
                  ))
                }
              </TableWrapper>
            ))
          }
        </Table>
        <View style={{marginTop:20, alignSelf: 'center'}}>
        <PieChart
            widthAndHeight={widthAndHeight}
            series={state.tableData.map((rowData,index) => rowData[2]).map(i=>Number(i))}
            sliceColor={sliceColor}
            doughnut={true}
            coverRadius={0.45}
            coverFill={'#FFF'}
          />
        {/* <PureChart data={sampleData} type='line' /> */}
          <BarChart
            style={{ height: 200 }}
            numberOfTicks={10}
            spacing={1}
            
            // spacingOuter={0.2}
            svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
            data={barData}
            segments={2}
            xAccessor={({ item }) => item.value}
            yAccessor={({ item }) => item.value}
            contentInset={{ top: 20, bottom: 30 }}
            
            {...this.props}
            
          >
            <Grid direction={Grid.Direction.HORIZONTAL}/>
            
            
            {/* <Grid direction={Grid.Direction.VERTICAL}/> */}
           
            {/* <Text style={styles.chartTitle}> Sales </Text> */}
            </BarChart>
            <XAxis
                    style={{ marginHorizontal: -10 }}
                    data={state.tableData.map((rowData,index) => rowData[2]).map(i=>Number(i))}
                    formatLabel={(value, index) => this.eliminateDuplicates(state.tableData.map((rowData,index) => rowData[4]).map(i=>Number(i)))}
                    
                    contentInset={{ left: 10, right: 10 }}
                    svg={{ fontSize: 10, fill: 'black',  }}
                    
                />
              
            <YAxis
                  
                  data={state.tableData.map((rowData,index) => rowData[2]).map(i=>Number(i))}
                    contentInset={{ left: 10, right: 10 }}
                    svg={{
                        
                        fontSize: 10,
                    }}
                    formatLabel={(value, index) => index}
                    // numberOfTicks={10}
                    
                />
            
          </View>
          </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#808B97' },
  text: { margin: 6, fontSize:11 },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  btn: { width: 58, height: 18, backgroundColor: '#78B7BB',  borderRadius: 2 },
  btnText: { textAlign: 'center', color: '#fff' }
});