<script lang="ts">
</script>

<section class="calendar">
	<h2 class="title en">2026. 4</h2>
	<div class="calendarWrapper">
		<div class="weekDays">
			<span>일</span>
			<span>월</span>
			<span>화</span>
			<span>수</span>
			<span>목</span>
			<span>금</span>
			<span>토</span>
		</div>
		<ul class="calendarGrid">
			<!-- 3월 말일 -->
			<li class="dimmed">29</li>
			<li class="dimmed">30</li>
			<li class="dimmed">31</li>

			<!-- 4월 -->
			<li>1</li>
			<li>2</li>
			<li>3</li>
			<li>4</li>
			<li>5</li>
			<li>6</li>
			<li>7</li>
			<li>8</li>
			<li>9</li>
			<li>10</li>
			<li>11</li>
			<li>12</li>
			<li>13</li>
			<li>14</li>
			<li>15</li>
			<li>16</li>
			<li>17</li>
			<li>18</li>
			<li>19</li>
			<li>20</li>
			<li>21</li>
			<li>22</li>
			<li>23</li>
			<li>24</li>
			<li class="special">25</li>
			<li>26</li>
			<li>27</li>
			<li>28</li>
			<li>29</li>
			<li>30</li>

			<!-- 5월 초 -->
			<li class="dimmed">1</li>
			<li class="dimmed">2</li>
		</ul>
	</div>

</section>

<style lang="scss">
	.calendar {
		position: relative;
		background-color: $white;
		padding: 2em 3.5em 4em 3.5em;

		.title {
			@extend .title-font-en;
			text-align: center;
			margin-bottom: 1em;
		}

		.calendar-content {
			display: flex;
			justify-content: space-between;

			.week-col {
				height: 100%;
			}
		}

		img.calendar-deco {
			position: absolute;
			bottom: 0.5em;
			right: 2.5em;
		}

    .calendarWrapper {
      font-family: 'Pretendard', sans-serif;
      margin: 0 auto;
      text-align: center;
    }

    .monthTitle {
      font-size: 1.75rem;
      font-weight: bold;
      margin-bottom: 1rem;
    }

    .weekDays {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      font-weight: 600;
      font-size: 1rem;
      margin-bottom: 0.5rem;
    }

    .calendarGrid {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
      gap: 0.3rem;
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .calendarGrid li {
      padding: 0.75rem 0;
      font-size: 0.95rem;
      border-radius: 8px;
    }

    .calendarGrid li.dimmed {
      color: #bbb;
    }

    .calendarGrid li.special {
      font-weight: bold;
      color: #e74c3c;
      position: relative;
    }

    .calendarGrid li.special::after {
      content: "💖\A\A\A Wedding Day";
      white-space: pre-line;
      position: absolute;
      top: -10%;
      left: 50%;
      transform: translateX(-50%);
      font-size: 0.7rem;
      color: #e74c3c;
      text-align: center;
      line-height: 1.2;
    }

  }
</style>
