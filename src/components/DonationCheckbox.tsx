type DonationCheckboxType = {
    onChange:() => void,
    checked: boolean,
    content: React.ReactNode
}

export const DonationCheckbox = ({ onChange, checked, content } : DonationCheckboxType) => {
  return (
    <div>
      <label className="flex gap-2">
        <input type="checkbox" onChange={onChange} checked={checked} />
        <p className="text-blue-600">{content}</p>
      </label>
    </div>
  );
};
