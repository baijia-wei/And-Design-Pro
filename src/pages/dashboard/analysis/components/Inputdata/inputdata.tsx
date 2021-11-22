import { Button, Card, Col, Row, Tabs, Upload } from 'antd';
import { RingProgress, Line } from '@ant-design/charts';
import type { OfflineDataType, DataItem } from '../../data.d';
import styles from '../../style.less';
import { UploadOutlined } from '@ant-design/icons';

const OfflineData = ({ offlineChartData }: { offlineChartData: DataItem[] }) => {
  return (
    <Card className={styles.offlineCard} bordered={false} style={{ marginTop: 32 }}>
      <div></div>

      <div style={{ padding: '0 24px' }}>
        <Line
          forceFit
          height={400}
          data={offlineChartData}
          responsive
          xField="year"
          yField="value"
        />
      </div>
    </Card>
  );
};

export default OfflineData;
