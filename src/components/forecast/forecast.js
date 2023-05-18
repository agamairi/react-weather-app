import {Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel} from "react-accessible-accordion";
import './forecast.css'


const WEEK_DAYS = ['Monday', 'Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday']
const Forecast = ({data}) => {
    const dayInWeek = new Date().getDay();

    const forecastdays = WEEK_DAYS.slice(dayInWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInWeek));
    return (
    <>
        <label className="title">Daitly</label>
        <Accordion allowZeroExpanded>
            {data.list.splice(0,7).map((item, idx) =>(
                <AccordionItem key={idx}>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            <div className="daily-item">
                                <img alt="weather" className="icon-small" src={`icons/${item.weather[0].icon}.png`}></img>
                                <label className="day">{forecastdays[idx]}</label>
                                <label className="description">{item.weather[0].description}</label>
                                <label className="min-max">{Math.round(item.main.temp_min)}°c / {Math.round(item.main.temp_max)}°c</label>
                            </div>
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <div className="daily-details-grid">
                            <div className="daily-details-grid-items">
                                <label>Pressure: </label>
                                <label>{item.main.pressure} hPa</label>
                            </div>
                            <div className="daily-details-grid-items">
                                <label>Humidity: </label>
                                <label>{item.main.humidity}%</label>
                            </div>
                            <div className="daily-details-grid-items">
                                <label>Clouds: </label>
                                <label>{item.clouds.all}%</label>
                            </div>
                            <div className="daily-details-grid-items">
                                <label>Wind Speed: </label>
                                <label>{item.wind.speed} m/s</label>
                            </div>
                            <div className="daily-details-grid-items">
                                <label>Sea Level: </label>
                                <label>{item.main.sea_level}m</label>
                            </div>
                            <div className="daily-details-grid-items">
                                <label>Feels Like: </label>
                                <label>{Math.round(item.main.feels_like)}°c</label>
                            </div>
                        </div>
                    </AccordionItemPanel>
                </AccordionItem>
            ))}

        </Accordion>
    </>
    );
}

export default Forecast;