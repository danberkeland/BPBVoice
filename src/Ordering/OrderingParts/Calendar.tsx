import React from "react";
import { Calendar } from 'primereact/calendar';

type Props = {
    delivDate: string,
    setDelivDate: React.Dispatch<React.SetStateAction<string>>
}

export const Cal: React.FC<Props> = ({ delivDate, setDelivDate}): JSX.Element => {

  const calDateSetter = (e) => {
    var today = e.value
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    setDelivDate(today)
  }

  const convertToDisplayDate = (d: string): Date => {
    var dateSplit = d.split('-')
    return new Date(Number(dateSplit[0]), Number(dateSplit[1]) - 1, Number(dateSplit[2]), 0, 0)

  }

  return (
        <div className="field col-12 md:col-4">
          <Calendar id="touchUI" value={convertToDisplayDate(delivDate)} onChange={(e) => calDateSetter(e)} touchUI />
        </div>
  );
};
