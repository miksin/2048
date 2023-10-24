const Key = {
	Left: "ArrowLeft",
	Right: "ArrowRight",
	Down: "ArrowDown",
	Up: "ArrowUp",
} as const;
type Key = (typeof Key)[keyof typeof Key];

export const useInteraction = (onInteraction: (key: Key) => void, disabled: boolean) => {
	let touchStart = { x: 0, y: 0 };

	const onKeyDown = (e: KeyboardEvent) => {
		if (disabled) return;

		switch (e.key) {
			case Key.Left:
			case Key.Right:
			case Key.Down:
			case Key.Up: {
				e.preventDefault();
				onInteraction(e.key);
			}
		}
	};

	const preventTouchDefault = (e: TouchEvent) => {
		if (e.cancelable) e.preventDefault();
	};

	const onTouchStart = (e: TouchEvent) => {
		if (disabled) return;
		preventTouchDefault(e);
		const touch = e.touches.item(0);
		if (touch) {
			touchStart = {
				x: touch.screenX,
				y: touch.screenY,
			};
		}
	};

	const onTouchMove = (e: TouchEvent) => {
		if (disabled) return;
		preventTouchDefault(e);
	};

	const onTouchEnd = (e: TouchEvent) => {
		if (disabled) return;
		preventTouchDefault(e);
		const touch = e.changedTouches.item(0) ?? e.touches.item(0);
		if (touch) {
			const delta = {
				x: touch.screenX - touchStart.x,
				y: touch.screenY - touchStart.y,
			};
			if (Math.pow(delta.x, 2) + Math.pow(delta.y, 2) < Math.pow(80, 2)) {
				return;
			}

			if (Math.abs(delta.x) > Math.abs(delta.y)) {
				if (delta.x > 0) onInteraction(Key.Right);
				else onInteraction(Key.Left);
			} else {
				if (delta.y > 0) onInteraction(Key.Down);
				else onInteraction(Key.Up);
			}
		}
	};

	return {
		onKeyDown,
		onTouchStart,
		onTouchEnd,
		onTouchMove,
	};
};
