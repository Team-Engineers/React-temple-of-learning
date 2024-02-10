function WhyJoinCard({ num, img, text }) {
    return (
      <div className="p-6 rounded-lg border border-white">
        <img src={require(`../../assets/images/icon/${img}`)} alt="" className="mx-auto" width="60" />
        <h4 className="text-2xl font-bold mt-2">#{num}</h4>
        <p>{text}</p> 
      </div>
    );
  }

  export default WhyJoinCard;
  