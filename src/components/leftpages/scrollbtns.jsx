import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ScrollButtons() {
  return (
    <div className="flex flex-row space-x-4 justify-between mx-4 h-full">
      <button className="h-1/2 w-14 fill-current text-green-600">
        <FontAwesomeIcon icon={faArrowLeft} fade />
      </button>
      <button className="h-1/2 w-14 fill-current text-green-600"> <FontAwesomeIcon icon={faArrowRight} fade /></button>
    </div>
  );
}
