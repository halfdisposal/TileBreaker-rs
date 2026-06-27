#version 330

in vec3 fragNormal;
in vec4 fragColor;

out vec4 finalColor;

void main() {
    vec3 lightDir = normalize(vec3(0.0, 1.0, 0.0)); // light from top
    float diff = max(dot(fragNormal, lightDir), 0.0);
    float ambient = 0.6;
    float light = ambient + (1.0 - ambient) * diff;
    finalColor = vec4(fragColor.rgb * light, fragColor.a);
}
