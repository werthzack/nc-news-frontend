function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
      <circle cx="12" cy="7" r="4"></circle>
    </svg>
  );
}

function Card() {
  return (
    <div class="card">
      <img
        src="https://images.pexels.com/photos/209841/pexels-photo-209841.jpeg?w=700&h=700"
        alt="Organize Basic Set (Walnut)"
        class="product-image"
      ></img>
      <div class="article-info">
        <div>
          <span>Sports</span>
          <p>Who Will Manage Your Club in 2021?</p>
        </div>
        <div className="author">
          <Icon />
          <span class="text-gray-600 text-sm">Sarah Johnson</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
