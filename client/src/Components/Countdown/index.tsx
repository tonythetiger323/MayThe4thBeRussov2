import * as React from 'react'
import Typography from '@material-ui/core/Typography'
import Responsive from 'react-responsive'

const Mobile = (props: any) => <Responsive {...props} maxWidth={667} />
const Default = (props: any) => <Responsive {...props} minWidth={668}/>

interface CountdownProps {
  readonly date: string;
}

interface CountdownState {
  readonly days: number;
  readonly hours: number;
  readonly minutes: number;
  readonly seconds: number;
}

class Countdown extends React.Component<CountdownProps, CountdownState> {
  constructor(props: CountdownProps) {
    super(props);

    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  calculateCountdown(endDate: string) {
    const countDownDate = new Date(endDate).getTime();
    const now = new Date().getTime();
    const distance = countDownDate - now;

    const timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    timeLeft.days = Math.floor(distance / (1000 * 60 * 60 * 24));
    timeLeft.hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    timeLeft.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    timeLeft.seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return timeLeft;
  }
  componentDidMount() {
    const interval = setInterval(() => {
      const date = this.calculateCountdown(this.props.date);
      if (date) {
        this.setState(date);
      } else {
        clearInterval(interval);
      }
    }, 1000);
  }

  addLeadingZeros(value: any) {
    value = String(value);
    while (value.length < 2) {
      value = '0' + value;
    }
    return value;
  }

  render() {
    const countDown = this.state;

    return (
      <div>
        <Default>
          <Typography variant='h5' align='center'>
            <span>
              <strong>{this.addLeadingZeros(countDown.days)}</strong>&nbsp;
              <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
            </span>&nbsp;
            <span>
              <strong>{this.addLeadingZeros(countDown.hours)}</strong>&nbsp;
              <span>Hours</span>
            </span>&nbsp;
            <span>
              <strong>{this.addLeadingZeros(countDown.minutes)}</strong>&nbsp;
              <span>Minutes</span>
            </span>&nbsp;
            <span>
              <strong>{this.addLeadingZeros(countDown.seconds)}</strong>&nbsp;
              <span>Seconds</span>
            </span>
          </Typography>
        </Default>

        <Mobile>
          <Typography variant='h6' align='center'>
            <span>
              <strong>{this.addLeadingZeros(countDown.days)}</strong>&nbsp;
              <span>{countDown.days === 1 ? 'Day' : 'Days'}</span>
            </span>&nbsp;
            <span>
              <strong>{this.addLeadingZeros(countDown.hours)}</strong>&nbsp;
              <span>Hours</span>
            </span>&nbsp;
            <span>
              <strong>{this.addLeadingZeros(countDown.minutes)}</strong>&nbsp;
              <span>Minutes</span>
            </span>&nbsp;
            <span>
              <strong>{this.addLeadingZeros(countDown.seconds)}</strong>&nbsp;
              <span>Seconds</span>
            </span>
          </Typography>
        </Mobile>
      </div>
    );
  }
}

export default Countdown;
