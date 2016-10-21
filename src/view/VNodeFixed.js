import { VNode } from './VNode';

export function VNodeFixed(type) {
	VNode.call(this, type);
}

const proto = Object.create(VNode.prototype);
proto.constructor = VNodeFixed;
proto.fixed = true;

VNodeFixed.prototype = proto;